/*
 * Business Rule: Catalog Request Sync
 * Table: Requested Item (sc_req_item)
 * When: after
 * Update: true
 * Condition: current.approval CHANGES
 *
 * Mirrors the requested item's approval state onto the parent Request so
 * the requester sees a consistent status without opening each item, and
 * kicks off the notifications defined in NOTIFICATION_CATALOG.md.
 */

(function executeRule(current, previous) {

    if (!current.approval.changes()) {
        return;
    }

    var approval = current.approval.toString();
    var request = new GlideRecord('sc_request');

    if (!request.get(current.request)) {
        return;
    }

    if (approval === 'approved') {
        gs.eventQueue('esp.request.approved', current, current.request_item, current.cat_item.getDisplayValue());
    } else if (approval === 'rejected') {
        current.state = 'closed_incomplete';
        current.update();
        gs.eventQueue('esp.request.rejected', current, current.request_item, current.cat_item.getDisplayValue());
    }

})(current, previous);
