/*
 * Business Rule: Critical Incident Audit
 * Table: Incident
 * When: after
 * Insert: true
 * Update: true
 *
 * Creates an audit note when an incident becomes Critical, and pushes a
 * notification to the external ops webhook via ESPExternalNotifier.
 */

(function executeRule(current, previous) {

    var becameCritical =
        current.impact.toString() === '1' &&
        (!previous || previous.impact.toString() !== '1');

    if (!becameCritical) {
        return;
    }

    gs.info(
        '[Employee Service Portal] Critical incident detected: ' +
        current.getDisplayValue('number')
    );

    var notifier = new ESPExternalNotifier();
    notifier.notifyExternalSystem(current);

})(current, previous);
