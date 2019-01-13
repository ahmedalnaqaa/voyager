const PUSH_NOTIFICATION = 1;
const PUSH_NOTIFICATION_LABEL = 'push notification';

const SMS = 2;
const SMS_LABEL = 'sms';

module.exports = {
    PUSH_NOTIFICATION         : PUSH_NOTIFICATION,
    PUSH_NOTIFICATION_LABEL: PUSH_NOTIFICATION_LABEL,

    SMS: SMS,
    SMS_LABEL: SMS_LABEL,

    choices: function getChoices() {
        let choices = {};
        choices[PUSH_NOTIFICATION] = PUSH_NOTIFICATION_LABEL;
        choices[SMS] = SMS_LABEL;
        return choices;
    },
    getLabel: function (choice) {
        let choices = this.choices();
        return choice in choices ? choices[choice] : 'unknown';
    },
};