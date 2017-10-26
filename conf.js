// // solves `SyntaxError: Unexpected token import`
// require("babel-register")({
//     presets: [ 'es2015' ]
// });

exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/upworkSpec.js'],

    onPrepare: () => {
        // set browser size...
        browser.manage().window().setSize(1024, 800);
    },

    capabilities: {
        browserName: 'chrome',
            shardTestFiles: true,
            maxInstances: 2,
            chromeOptions: {
            args: [
                // disable chrome's wakiness
                '--disable-infobars',
                '--disable-extensions',
                'verbose',
                'log-path=/tmp/chromedriver.log'
            ],
                prefs: {
                // disable chrome's annoying password manager
                'profile.password_manager_enabled': false,
                    'credentials_enable_service': false,
                    'password_manager_enabled': false
            }
        }
    }
};