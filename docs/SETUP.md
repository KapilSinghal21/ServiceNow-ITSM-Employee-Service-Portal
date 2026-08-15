# Setup guide

Steps to build this app from scratch on a ServiceNow PDI. Update set
covers the same ground — this doc is here for anyone rebuilding by hand
or auditing the config.

## 1. Application

Create a scoped application:
- Name: Employee Service Portal
- Scope: x_kap_esp
- Application menu: Employee Service Portal

Modules: My Incidents, All Incidents, Service Requests, Fulfillment Tasks,
Reports, Dashboard.

## 2. Roles

- `x_kap_esp.employee` — create/view own requests and incidents
- `x_kap_esp.it_agent` — manage assigned incidents/tasks
- `x_kap_esp.it_manager` — reporting, approvals, broader ITSM access

## 3. Assignment groups

Service Desk, Hardware Support, Software Support, Access Management.

## 4. Incident enhancements

Standard Incident table, plus:
- Business Impact (choice: Low, Medium, High, Critical)
- Business Justification (multi-line text)
- Requested For (reference: sys_user)

## 5. Automated assignment

Before insert/update Business Rule on Incident, category -> group:
Hardware -> Hardware Support, Software -> Software Support,
Access -> Access Management, else -> Service Desk.

Script: `src/server/business-rules/BR_Auto_Assignment.js`

## 6. Client-side validation

onChange Client Script on Business Impact — makes Business Justification
mandatory when impact is Critical.

Script: `src/client/client-scripts/CS_Critical_Impact.js`

## 7. GlideAjax

Script Include `ESPIncidentUtils` (client callable) backing the onLoad
client script `CS_Get_Open_Incident_Count`, which shows the caller's open
incident count on the form.

## 8. REST integration

- Script Include `ESPExternalNotifier` sends an outbound REST callout to
  an external ops webhook whenever an incident becomes Critical.
- Scripted REST API `ESPIncidentSummaryAPI` exposes a read-only endpoint
  for external systems to pull open incident counts by group.

See `src/server/integrations/REST_INTEGRATION.md` for endpoint config.

## 9. Service Catalog

Catalog: Employee Services. Items: Laptop Request, Software Installation
Request, Access Request — variables and flow are in
`src/catalog/CATALOG_ITEMS.md`.

## 10. Flow Designer

One flow per catalog item: Get Requested Item -> Ask for Approval ->
(approved: create fulfillment task, assign, notify, wait, notify again) /
(rejected: close incomplete, notify). Full spec in
`src/flows/FLOW_DESIGN.md`.

## 11. Notifications

See `src/notifications/NOTIFICATION_CATALOG.md` for triggers and
recipients.

## 12. ACLs

Least-privilege per `src/security/ACL_MATRIX.md`. Test every rule with
Impersonate User before moving on.

## 13. SLA

- Name: Critical Incident Resolution SLA
- Table: Incident
- Start: Priority is Critical (1)
- Duration: 4 business hours
- Pause: On Hold
- Stop: Resolved or Closed

## 14. Dashboard

`ITSM Operations Dashboard` — Open Incidents by Priority, Incidents by
Assignment Group, Critical Incidents, SLA Breaches, Requests by Catalog
Item, Requests by State.

## 15. Update set

Create and switch to a local update set before making any of the above
changes, complete it once everything is built and tested, then export to
XML. Never commit credentials or instance passwords.
