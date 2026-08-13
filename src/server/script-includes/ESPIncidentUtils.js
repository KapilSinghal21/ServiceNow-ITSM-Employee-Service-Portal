/*
 * Script Include: ESPIncidentUtils
 * Client callable: true
 *
 * Demonstrates GlideRecord + GlideAjax.
 */

var ESPIncidentUtils = Class.create();
ESPIncidentUtils.prototype = Object.extendsObject(AbstractAjaxProcessor, {

    getOpenIncidentCount: function() {
        var count = 0;
        var userId = gs.getUserID();

        var gr = new GlideRecord('incident');
        gr.addQuery('caller_id', userId);
        gr.addQuery('active', true);
        gr.query();

        while (gr.next()) {
            count++;
        }

        return count.toString();
    },

    type: 'ESPIncidentUtils'
});
