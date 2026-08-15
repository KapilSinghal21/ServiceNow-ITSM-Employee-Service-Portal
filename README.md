# ServiceNow ITSM & Employee Service Portal

A portfolio-grade ServiceNow application demonstrating ITSM, Service Catalog, Flow Designer, client-side scripting, server-side scripting, ACLs, SLAs, notifications, and dashboards.

## Project Goal
Build an internal employee service portal where employees can:
- Report incidents
- Request laptops, software, and access
- Track requests
- Receive automated notifications

IT agents can:
- Manage incidents and fulfillment tasks
- Work with assignment groups
- Track SLA performance

## Platform
- ServiceNow Personal Developer Instance (PDI)
- JavaScript
- GlideForm
- GlideRecord
- GlideAjax
- Business Rules
- Client Scripts
- Script Includes
- UI Policies
- Flow Designer
- Service Catalog
- ACLs / Roles
- SLAs
- Notifications
- Reports & Dashboards

## Repository Structure
See `docs/PROJECT_BUILD_GUIDE.md` for the complete implementation sequence.

> Important: ServiceNow configuration is metadata stored inside the instance. The repository contains the implementation specification, scripts, test cases, documentation, and deployment notes. Export update sets from your PDI separately if you want to move the application to another instance.

## Suggested Application Scope
Create a scoped application:
`Employee Service Portal`

Suggested scope:
`x_yourcompany_esp`

Replace `yourcompany` with your actual developer namespace.

## Core Features
1. Incident Management
2. Automated assignment
3. Critical incident validation
4. Employee service catalog
5. Laptop request
6. Software installation request
7. Access request
8. Approval workflow
9. Fulfillment task creation
10. Notifications
11. Role-based security
12. SLA tracking
13. ITSM dashboard

## Build Order
1. Create PDI and scoped application
2. Create roles and assignment groups
3. Configure incident enhancements
4. Add Client Scripts and UI Policies
5. Add Business Rules
6. Add Script Includes / GlideAjax
7. Build catalog items
8. Build Flow Designer automations
9. Configure notifications
10. Configure ACLs
11. Configure SLA
12. Build reports/dashboard
13. Execute test cases
14. Export update set
15. Add screenshots and publish to GitHub

## Interview Talking Points
Be ready to explain:
- Difference between Client Script and Business Rule
- Before vs After Business Rule
- GlideRecord
- GlideAjax and why it is used
- Script Include
- UI Policy vs Client Script
- Flow Designer vs Business Rule
- ACL evaluation
- Catalog Item vs Record Producer
- SLA configuration
- Scoped application vs Global scope
