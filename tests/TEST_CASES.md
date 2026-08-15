# Test Cases

## TC-01 — Critical Incident Validation
1. Create an incident.
2. Set Business Impact = Critical.
3. Attempt to save without Business Justification.
4. Expected: justification is mandatory.

## TC-02 — Hardware Auto Assignment
1. Create incident.
2. Category = Hardware.
3. Save.
4. Expected: Hardware Support assignment group.

## TC-03 — Software Auto Assignment
Expected assignment group: Software Support.

## TC-04 — Access Auto Assignment
Expected assignment group: Access Management.

## TC-05 — GlideAjax
1. Log in as a user with open incidents.
2. Open incident form.
3. Expected: info message displays open incident count.

## TC-06 — Laptop Request
1. Submit Laptop Request.
2. Expected: approval generated.
3. Approve.
4. Expected: fulfillment task assigned to Hardware Support.
5. Complete task.
6. Expected: requester receives completion notification.

## TC-07 — Rejected Request
Reject an approval.
Expected: request moves to rejected/closed-incomplete path and requester is notified.

## TC-08 — ACL
Impersonate employee.
Expected: employee cannot update another user's incident.

## TC-09 — SLA
Create Critical incident.
Expected: SLA attaches.
Put incident On Hold.
Expected: SLA pauses if configured.
Resolve incident.
Expected: SLA stops.

## TC-10 — Dashboard
Expected dashboard displays incident/request metrics without errors.

## Evidence
Record:
- Test ID
- Date
- Result
- Screenshot
- Notes

Do not mark a test Passed until it has been executed in the PDI.
