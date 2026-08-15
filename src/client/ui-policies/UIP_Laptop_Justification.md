# UI Policy: Laptop Type -> Justification Required

**Table:** Catalog Item — Laptop Request
**Applies to:** Widget/Catalog Client Script layer (Service Portal), mirrors the
Incident-side pattern used in `CS_Critical_Impact.js`.

## Condition
`laptop_type` is `power_user`

## Actions
- `business_justification` — Mandatory: true, Visible: true

## Reasoning
Standard and Developer laptop requests don't need extra justification since
they're pre-approved hardware tiers. Power User requests go through manager
approval, so the justification field has to be filled in before the request
can be submitted — this keeps the approval step from being a bottleneck
where the approver has to chase the requester for details.

## Notes
Configured as a native UI Policy (no script needed) rather than a Catalog
Client Script, since it's a straightforward mandatory/visible toggle driven
by a single variable value.
