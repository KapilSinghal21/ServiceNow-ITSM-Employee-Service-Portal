# ACL Matrix

| Resource | Employee | IT Agent | IT Manager |
|---|---|---|---|
| Own incident read | Yes | Yes | Yes |
| Own incident create | Yes | Yes | Yes |
| Assigned incident update | No | Yes | Yes |
| All incident read | No | Yes | Yes |
| Catalog request create | Yes | Yes | Yes |
| Approval | No | Optional | Yes |
| Dashboard | Limited | Yes | Yes |

## ACL Design

Use the smallest permission required.

Example record-level condition for employee access:
- Caller is the logged-in user.

Example agent access:
- User belongs to the incident's assignment group.

Example manager access:
- User has the IT Manager role.

Test ACLs using impersonation before considering the rule done.
