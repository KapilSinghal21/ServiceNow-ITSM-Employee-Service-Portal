/*
 * Client Script: Get Open Incident Count
 * Type: onLoad
 * Table: Incident
 *
 * Demonstrates asynchronous GlideAjax.
 */

function onLoad() {
    var ga = new GlideAjax('ESPIncidentUtils');
    ga.addParam('sysparm_name', 'getOpenIncidentCount');
    ga.getXMLAnswer(function(answer) {
        var count = parseInt(answer, 10) || 0;

        if (count > 0) {
            g_form.addInfoMessage(
                'You currently have ' + count + ' open incident(s).'
            );
        }
    });
}
