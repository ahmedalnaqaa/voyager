const RIDER = 1;
const RIDER_LABEL = 'rider';

const CUSTOMER = 2;
const CUSTOMER_LABEL = 'customer';

module.exports = {
    RIDER         : RIDER,
    RIDER_LABEL: RIDER_LABEL,

    CUSTOMER: CUSTOMER,
    CUSTOMER_LABEL: CUSTOMER_LABEL,

    choices: function getChoices() {
        let choices = {};
        choices[RIDER] = RIDER_LABEL;
        choices[CUSTOMER] = CUSTOMER_LABEL;

        return choices;
    },
    getLabel: function (choice) {
        let choices = this.choices();
        return choice in choices ? choices[choice] : 'unknown';
    },
};