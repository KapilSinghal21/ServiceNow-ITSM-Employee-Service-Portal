/*
 * Catalog Client Script: Laptop Type Hint
 * Type: onChange
 * Catalog Item: Laptop Request
 * Variable: laptop_type
 *
 * Shows a short help message so requesters pick the right tier instead
 * of defaulting to Power User for every request (which was slowing down
 * approvals before this was added).
 */

function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue === '') {
        return;
    }

    var hints = {
        standard: 'Standard tier — no approval justification needed, ships in 2-3 business days.',
        developer: 'Developer tier — includes elevated build tools, ships in 2-3 business days.',
        power_user: 'Power User tier — requires manager approval and a business justification.'
    };

    var field = g_form.getControl('laptop_type');
    var msg = hints[newValue];

    if (msg) {
        g_form.showFieldMsg('laptop_type', msg, 'info', false);
    }
}
