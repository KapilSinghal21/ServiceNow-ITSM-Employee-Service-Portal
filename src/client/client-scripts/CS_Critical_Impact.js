/*
 * Client Script: Critical Impact Validation
 * Type: onChange
 * Table: Incident
 * Field: Business Impact
 */

function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading) {
        return;
    }

    var justificationField = 'u_business_justification';

    if (newValue === 'critical') {
        g_form.setMandatory(justificationField, true);
        g_form.showFieldMsg(
            justificationField,
            'Business justification is required for Critical impact incidents.',
            'info'
        );
    } else {
        g_form.setMandatory(justificationField, false);
    }
}
