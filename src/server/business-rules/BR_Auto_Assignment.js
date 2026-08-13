/*
 * Business Rule: Auto Assignment
 * Table: Incident
 * When: before
 * Insert: true
 * Update: true
 *
 * Adjust category values/group sys_ids for your PDI.
 */

(function executeRule(current, previous) {

    if (!current.category) {
        return;
    }

    var groupMap = {
        'hardware': 'Hardware Support',
        'software': 'Software Support',
        'access': 'Access Management'
    };

    var targetGroup = groupMap[current.category.toString().toLowerCase()];

    if (!targetGroup) {
        targetGroup = 'Service Desk';
    }

    var group = new GlideRecord('sys_user_group');
    group.addQuery('name', targetGroup);
    group.setLimit(1);
    group.query();

    if (group.next()) {
        current.assignment_group = group.getUniqueValue();
    }

})(current, previous);
