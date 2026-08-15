# ServiceNow ITSM & Employee Service Portal

A ServiceNow scoped application that gives employees a single place to log
incidents and request laptops, software, or access, while giving IT agents
the tools to triage, fulfill, and track SLA performance on that work.
Critical incidents also push a notification out to an external ops webhook
through a REST integration, and expose a read-only summary API for
external reporting tools.

Built on a Personal Developer Instance (PDI) to practice the core
ServiceNow developer stack: Client Scripts, Business Rules, Script
Includes/GlideAjax, REST integrations, Service Catalog, Flow Designer,
ACLs, SLAs, notifications, and reporting.

## What it does

**Employees**
- Log incidents with impact-based validation (Critical incidents require a
  business justification before they can be saved)
- Request a laptop, software install, or access through the Employee
  Services catalog
- See a running count of their own open incidents on the incident form
- Get notified when their request is approved, rejected, or completed

**IT agents / managers**
- Incidents are auto-routed to the right assignment group (Hardware,
  Software, Access, or Service Desk) based on category
- Approve or reject catalog requests, with fulfillment tasks created and
  assigned automatically once approved
- Get an external webhook alert the moment an incident becomes Critical
- Pull open-incident counts by group through a scripted REST API
- Track SLA performance on Critical incidents
- Monitor everything from an ITSM Operations dashboard

## Application scope

`x_kap_esp` — Employee Service Portal

## Repository layout

```
src/
  client/client-scripts/   Client Scripts (onChange/onLoad)
  client/catalog-scripts/  Catalog Client Scripts
  client/ui-policies/      UI Policy conditions
  server/business-rules/   Business Rules
  server/script-includes/  Script Includes (GlideAjax, REST callout)
  server/integrations/     Scripted REST API + REST integration notes
  catalog/                 Catalog item definitions
  flows/                   Flow Designer specs
  notifications/           Notification definitions
  security/                ACL matrix
docs/                      Architecture and setup notes
tests/                     Test cases and results
update-set/                Exported update set XML
```

ServiceNow configuration lives inside the instance as metadata, so this
repo holds the implementation: the actual script bodies, catalog/flow
specs, ACL matrix, and an exported update set XML that can be imported
into another instance (`update-set/x_kap_esp_update_set.xml`).

## Core pieces

| Component | File |
|---|---|
| Critical impact validation | `src/client/client-scripts/CS_Critical_Impact.js` |
| Open incident count (GlideAjax) | `src/client/client-scripts/CS_Get_Open_Incident_Count.js` |
| Auto assignment by category | `src/server/business-rules/BR_Auto_Assignment.js` |
| Critical incident audit + webhook | `src/server/business-rules/BR_Critical_Incident_Audit.js` |
| Catalog approval sync | `src/server/business-rules/BR_Catalog_Request_Sync.js` |
| GlideAjax handler | `src/server/script-includes/ESPIncidentUtils.js` |
| Outbound REST callout | `src/server/script-includes/ESPExternalNotifier.js` |
| Inbound REST API | `src/server/integrations/ESPIncidentSummaryAPI.js` |

See `docs/SETUP.md` for the full build sequence and `docs/ARCHITECTURE.md`
for how the pieces fit together.

## Setup

1. Spin up a ServiceNow PDI.
2. Create the scoped app `Employee Service Portal` (scope `x_kap_esp`).
3. Either import `update-set/x_kap_esp_update_set.xml` directly, or follow
   `docs/SETUP.md` and copy each script in `src/` into the matching
   ServiceNow record.
4. Run through `tests/TEST_CASES.md` to confirm behavior in your instance.

## Testing

All 10 test cases in `tests/TEST_CASES.md` were executed on a PDI; results
and notes are recorded there.

## License

MIT — see `LICENSE`.
