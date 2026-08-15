# Project Build Guide

## 1. Application

Create a scoped application:
- Name: Employee Service Portal
- Scope: your own namespace
- Application menu: Employee Service Portal

Recommended modules:
- My Incidents
- All Incidents
- Service Requests
- Fulfillment Tasks
- Reports
- Dashboard

## 2. Roles

Create:
- `x_<scope>.employee`
- `x_<scope>.it_agent`
- `x_<scope>.it_manager`

Suggested access:
- Employee: create/view own requests and incidents
- IT Agent: manage assigned incidents/tasks
- IT Manager: reporting, approvals, broader ITSM access

## 3. Assignment Groups

Create:
- Service Desk
- Hardware Support
- Software Support
- Access Management

## 4. Incident Enhancements

Use the standard Incident table where possible.

Recommended custom fields:
- Business Impact
- Business Justification
- Requested For

Suggested Business Impact choices:
- Low
- Medium
- High
- Critical

Add a Client Script to make justification mandatory when impact is Critical.

## 5. Automated Assignment

Create a Before Insert/Update Business Rule on Incident.

Logic:
- Hardware category -> Hardware Support
- Software category -> Software Support
- Access category -> Access Management
- Otherwise -> Service Desk

Use the script in `src/server/business-rules/BR_Auto_Assignment.js`.

## 6. Client-side Validation

Create an onChange Client Script on Business Impact.

Use:
`src/client/client-scripts/CS_Critical_Impact.js`

Behavior:
- If Critical, make Business Justification mandatory.
- Otherwise, make it optional.

## 7. GlideAjax

Create Script Include:
`ESPIncidentUtils`

Client script:
`CS_Get_Open_Incident_Count`

The client calls the Script Include asynchronously to retrieve the user's open incident count.

Important:
- Script Include must be client callable.
- Use `GlideAjax`.
- Do not use synchronous GlideAjax.

## 8. Service Catalog

Create these catalog items under an Employee Services catalog:

### Laptop Request
Variables:
- Requested For
- Laptop Type
- Business Justification
- Required By Date

### Software Installation Request
Variables:
- Requested For
- Software Name
- Version
- Business Justification

### Access Request
Variables:
- Requested For
- Application
- Access Level
- Business Justification

## 9. Flow Designer

### Laptop Flow
Trigger:
Catalog Item Requested

Steps:
1. Get Requested Item
2. Request approval from IT Manager
3. If approved, create fulfillment task
4. Assign to Hardware Support
5. Notify requester
6. Wait for task completion
7. Notify requester of completion
8. Close request

### Software Flow
Same pattern, assign to Software Support.

### Access Flow
Same pattern, assign to Access Management.

## 10. Notifications

Create notifications for:
- Incident assigned
- Approval requested
- Request approved
- Request rejected
- Fulfillment completed
- Incident resolved

Suggested subjects are in `src/notifications/NOTIFICATION_CATALOG.md`.

## 11. ACLs

Implement least-privilege access.

Examples:
- Employees can read only their own requests.
- IT agents can read/update incidents assigned to their groups.
- IT managers can approve and report.

Document each ACL before creating it.

## 12. SLA

Create an Incident SLA:
- Name: Critical Incident Resolution SLA
- Table: Incident
- Start: Priority is Critical / 1
- Duration: 4 business hours
- Pause: On Hold
- Stop: Resolved or Closed

Do not claim an SLA exists in the resume until it is tested successfully.

## 13. Dashboard

Create:
- Open Incidents by Priority
- Incidents by Assignment Group
- Critical Incidents
- SLA Breaches
- Requests by Catalog Item
- Requests by State

Dashboard name:
`ITSM Operations Dashboard`

## 14. Evidence

Capture screenshots of:
1. Application
2. Roles
3. Incident form
4. Client Script
5. Business Rule
6. Script Include
7. Catalog Item
8. Flow Designer
9. Notification
10. ACL
11. SLA
12. Dashboard
13. Successful test cases

Store screenshots in:
`docs/screenshots/`

Do not upload secrets, credentials, API keys, or personal data.

## 15. Update Set

After completing and testing the project:
1. Create an update set.
2. Make it current.
3. Build/configure the project.
4. Complete the update set.
5. Export the XML.
6. Store it locally as an optional release artifact.

Never commit credentials or instance passwords.
