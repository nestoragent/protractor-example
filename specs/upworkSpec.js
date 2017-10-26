/**
 * Created by velichko-aa on 26.10.17.
 */

describe('upwork login', function () {
    it('should input creds at Upwork', function () {
        browser.get('https://www.upwork.com/');
        browser.get('https://www.upwork.com/ab/account-security/login');

        element(by.css('input#login_username')).sendKeys('SomeLogin@gmail.com');
        element(by.css('#login_password')).sendKeys('TestPassword');
        element(by.css('form[name="login"] div.hidden-xs button[type="submit"]')).click();
    });

    it('check if alert exist', function () {
        var nominateButtons = element.all(by.css('div.alert'));
        var displayedButtons = nominateButtons.filter(function (elem) {
            return elem.isDisplayed();
        });
        displayedButtons.count().then(function (count) {
            expect(count).toEqual(1);
            if (count === 1) {
                displayedButtons.first().getText().then(function (text) {
                    console.log("Error text: " + text);
                    expect(text).toEqual('Invalid username, email or password');
                });
            }
        });
    });
});

