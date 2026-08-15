/*
 * Script Include: ESPExternalNotifier
 * Client callable: false
 *
 * Sends a REST callout to an external ops/incident-management webhook
 * whenever an incident in this app becomes Critical, so on-call tooling
 * outside ServiceNow (Slack/Teams channel, PagerDuty, etc.) gets notified
 * without polling the instance.
 *
 * The outbound REST Message record ("ESP Ops Webhook") holds the actual
 * endpoint URL and auth, configured per-environment — nothing here is
 * environment specific.
 */

var ESPExternalNotifier = Class.create();
ESPExternalNotifier.prototype = {
    initialize: function() {},

    REST_MESSAGE_NAME: 'ESP Ops Webhook',
    REST_MESSAGE_METHOD: 'notify_critical',

    notifyExternalSystem: function(incidentGr) {
        if (!incidentGr || !incidentGr.isValidRecord()) {
            return false;
        }

        try {
            var request = new sn_ws.RESTMessageV2(this.REST_MESSAGE_NAME, this.REST_MESSAGE_METHOD);

            var payload = {
                number: incidentGr.getValue('number'),
                short_description: incidentGr.getValue('short_description'),
                assignment_group: incidentGr.getDisplayValue('assignment_group'),
                impact: incidentGr.getValue('impact'),
                sys_id: incidentGr.getUniqueValue(),
                instance_url: gs.getProperty('glide.servlet.uri') + 'incident.do?sys_id=' + incidentGr.getUniqueValue()
            };

            request.setRequestBody(JSON.stringify(payload));
            var response = request.execute();
            var status = response.getStatusCode();

            if (status < 200 || status >= 300) {
                gs.warn('[ESPExternalNotifier] Webhook call for ' + payload.number +
                    ' returned status ' + status);
                return false;
            }

            return true;
        } catch (ex) {
            gs.error('[ESPExternalNotifier] Failed to notify external system: ' + ex.getMessage());
            return false;
        }
    },

    type: 'ESPExternalNotifier'
};
