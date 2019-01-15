const IOS = 0;
const IOS_LABEL = 'ios';

const ANDROID = 2;
const ANDROID_LABEL = 'android';

const DESKTOP = 5;
const DESKTOP_LABEL = 'desktop';

module.exports = {
    IOS         : IOS,
    IOS_LABEL: IOS_LABEL,

    ANDROID: ANDROID,
    ANDROID_LABEL: ANDROID_LABEL,

    DESKTOP: DESKTOP,
    DESKTOP_LABEL: DESKTOP_LABEL,

    choices: function getChoices() {
        let choices = {};
        choices[IOS] = IOS_LABEL;
        choices[ANDROID] = ANDROID_LABEL;
        choices[DESKTOP] = DESKTOP_LABEL;

        return choices;
    },
    getLabel: function (choice) {
        let choices = this.choices();
        return choice in choices ? choices[choice] : 'unknown';
    },
};