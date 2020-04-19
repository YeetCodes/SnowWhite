/*global exports, require, console, global */
(function () {
    'use strict';

    var moduleObject;

    function initialiseModule() {
        require('./MMM-CurrencyRate.js');
    }

    global.Module = {
        register: function (name, moduleObjectArgument) {
            var doNothing = function (nothing) {
                return nothing;
            };
            doNothing(name);

            moduleObject = moduleObjectArgument;

            moduleObject.updateDom = function (time) {
                return;
            };
        },

    };

    exports.testInitialValues = function (test) {
        initialiseModule();
        test.equal(moduleObject.defaults.fetchTime, 6000000)
        test.equal(moduleObject.defaults.base, "GBP");
        test.equal(1, 1);
        test.done();
    };

    exports.testRecieveRates = function (test) {
        initialiseModule();
        moduleObject.recieveRates("some rates");
        test.equal(moduleObject.CurrencyRate, "some rates");
        test.equal(moduleObject.fetched, true);
        test.done();
    };

    exports.testSocketNotificationReceived = function (test) {
        initialiseModule();
        moduleObject.socketNotificationReceived("CurrencyRate_RESULT", "some new rates");
        test.equal(moduleObject.CurrencyRate, "some new rates");
        test.done();
    };

}());
