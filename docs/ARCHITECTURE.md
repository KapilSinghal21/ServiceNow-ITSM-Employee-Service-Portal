# Architecture

```text
Employee
   |
   +--> Incident Form
   |      |
   |      +--> Client Scripts / UI Policies
   |      +--> Business Rules
   |      +--> Script Includes
   |
   +--> Service Catalog
          |
          +--> Catalog Item
                 |
                 +--> Flow Designer
                        |
                        +--> Approval
                        +--> Assignment Group
                        +--> Fulfillment Task
                        +--> Notification
                        +--> Closure

                 +--> SLA
                 +--> Reports
                 +--> Dashboard
```

## Layering

Presentation:
- Forms
- Client Scripts
- UI Policies

Application:
- Business Rules
- Script Includes
- Flow Designer

Security:
- Roles
- ACLs

Operations:
- SLAs
- Notifications
- Reports
- Dashboard
