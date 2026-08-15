# Test Cases

Executed against a ServiceNow PDI (Yokohama release), scope `x_kap_esp`.

## TC-01 — Critical Incident Validation
1. Create an incident.
2. Set Business Impact = Critical.
3. Attempt to save without Business Justification.
4. Expected: justification is mandatory.

**Result: Pass.** Field message displayed and save was blocked until justification was entered.

## TC-02 — Hardware Auto Assignment
1. Create incident.
2. Category = Hardware.
3. Save.
4. Expected: Hardware Support assignment group.

**Result: Pass.**

## TC-03 — Software Auto Assignment
Expected assignment group: Software Support.

**Result: Pass.**

## TC-04 — Access Auto Assignment
Expected assignment group: Access Management.

**Result: Pass.**

## TC-05 — GlideAjax
1. Log in as a user with open incidents.
2. Open incident form.
3. Expected: info message displays open incident count.

**Result: Pass.** Message showed "You currently have 3 open incident(s)." for the test user.

## TC-06 — Laptop Request
1. Submit Laptop Request (Power User tier).
2. Expected: approval generated.
3. Approve.
4. Expected: fulfillment task assigned to Hardware Support.
5. Complete task.
6. Expected: requester receives completion notification.

**Result: Pass.**

## TC-07 — Rejected Request
Reject an approval.
Expected: request moves to closed-incomplete and requester is notified.

**Result: Pass.**

## TC-08 — ACL
Impersonate employee.
Expected: employee cannot update another user's incident.

**Result: Pass.** Update attempt returned "Access denied."

## TC-09 — SLA
Create Critical incident.
Expected: SLA attaches.
Put incident On Hold.
Expected: SLA pauses.
Resolve incident.
Expected: SLA stops.

**Result: Pass.**

## TC-10 — Dashboard
Expected dashboard displays incident/request metrics without errors.

**Result: Pass.**

## TC-11 — Outbound webhook
Set an incident's impact to Critical.
Expected: ESPExternalNotifier fires a REST call to the configured ops
webhook and the response status is logged.

**Result: Pass.** Test endpoint (webhook.site) received the payload with
correct incident number and assignment group.

## TC-12 — Incident summary API
GET `/api/x_kap_esp/incident_summary` as a user with the it_manager role.
Expected: JSON summary of open incidents per assignment group.

**Result: Pass.** Unauthenticated and non-manager requests correctly
returned 403.

## Summary
12/12 test cases passed.
