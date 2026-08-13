# Flow Designer Specifications

## Flow 1 — Laptop Request Fulfillment

Trigger:
- Service Catalog
- Catalog Item Requested
- Laptop Request

Actions:
1. Get Requested Item
2. Ask for Approval
3. If Approval = Approved
   - Create Catalog Task
   - Assignment group = Hardware Support
   - Notify requester
   - Wait for task completion
   - Notify requester
4. If Rejected
   - Update request as Closed Incomplete
   - Notify requester

## Flow 2 — Software Installation

Assignment group:
Software Support

## Flow 3 — Access Request

Assignment group:
Access Management

## Design Principle

Use Flow Designer for business-process orchestration. Keep simple record validation in Client Scripts and server-side data integrity in Business Rules.
