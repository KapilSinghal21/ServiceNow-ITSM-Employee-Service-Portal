# Changelog

## 0.4.0 — REST integration
- Added `ESPExternalNotifier` outbound REST callout to notify an external
  ops webhook when an incident becomes Critical
- Added `ESPIncidentSummaryAPI` scripted REST resource for external
  reporting tools to pull open-incident counts
- Wired the webhook call into `BR_Critical_Incident_Audit`

## 0.3.0 — Catalog + notifications
- Added `BR_Catalog_Request_Sync` to mirror approval state onto the parent
  request and fire approval/rejection notifications
- Added laptop request UI policy and catalog client script hint
- Finished ACL matrix and ran full impersonation pass (TC-08)
- Exported update set (`update-set/x_kap_esp_update_set.xml`)

## 0.2.0 — Incident automation
- `BR_Auto_Assignment` routes incidents by category
- `BR_Critical_Incident_Audit` logs critical incident transitions
- `CS_Critical_Impact` makes justification mandatory on Critical impact
- `ESPIncidentUtils` + `CS_Get_Open_Incident_Count` for the open-incident
  count via GlideAjax
- SLA on Critical incidents, first dashboard pass

## 0.1.0 — Project setup
- Scoped app `x_kap_esp` created
- Roles, assignment groups, catalog structure defined
- Build guide and architecture notes written
