/*
 * Scripted REST Resource: Incident Summary
 * API: ESP Incident Summary API
 * Base path: /api/x_kap_esp/incident_summary
 * Method: GET
 * Required role: x_kap_esp.it_manager
 *
 * Read-only endpoint for external systems (reporting tools, status pages)
 * to pull a lightweight open-incident count by assignment group without
 * needing direct table access.
 */

(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response) {

    var groups = ['Service Desk', 'Hardware Support', 'Software Support', 'Access Management'];
    var summary = [];

    groups.forEach(function(groupName) {
        var gr = new GlideRecord('incident');
        gr.addQuery('assignment_group.name', groupName);
        gr.addQuery('active', true);
        gr.query();

        summary.push({
            group: groupName,
            open_incidents: gr.getRowCount()
        });
    });

    response.setStatus(200);
    response.setBody({
        generated_on: new GlideDateTime().getDisplayValue(),
        summary: summary
    });

})(request, response);
