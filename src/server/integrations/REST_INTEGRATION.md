# REST integration

Two REST touchpoints, one outbound and one inbound.

## Outbound — critical incident webhook

| Field | Value |
|---|---|
| REST Message | ESP Ops Webhook |
| HTTP Method | notify_critical (POST) |
| Endpoint | environment-specific, set on the REST Message record |
| Auth | Bearer token stored on the REST Message, not in code |
| Called from | `BR_Critical_Incident_Audit.js` via `ESPExternalNotifier.notifyExternalSystem()` |

Fires once per incident the moment impact changes to Critical. Payload is
incident number, short description, assignment group, impact, and a
direct link back into the instance — enough for an external on-call tool
to act on without a second lookup.

## Inbound — incident summary API

| Field | Value |
|---|---|
| API name | ESP Incident Summary API |
| Base path | /api/x_kap_esp/incident_summary |
| Method | GET |
| Required role | x_kap_esp.it_manager |
| Script | `ESPIncidentSummaryAPI.js` |

Returns open incident counts per assignment group as JSON, for external
reporting/status tooling that shouldn't have direct table access:

```json
{
  "generated_on": "2026-07-14 09:15:00",
  "summary": [
    { "group": "Service Desk", "open_incidents": 4 },
    { "group": "Hardware Support", "open_incidents": 2 }
  ]
}
```
