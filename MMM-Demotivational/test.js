/*global exports, require, console, global */
(function () {
    'use strict';

    var moduleObject;

    function initialiseModule() {
        require('./MMM-Demotivational.js');
    }

    global.Module = {
        register: function (name, moduleObjectArgument) {
            var doNothing = function (nothing) {
                return nothing;
            };
            doNothing(name);

            moduleObjectArgument.config = {
                transitionInterval: 12345,
                ignoreModules: ['0'],
                mode: 'global'
            };

            moduleObject = moduleObjectArgument;
        }
    };

    exports.testInitalValues = function (test) {
        initialiseModule();
        test.equal(moduleObject.defaults.demotivators.anytime[0],"For every winner, there are dozens of losers.\nOdds are you are one of them.");
        test.equal(moduleObject.defaults.updateInterval, 5000);
        test.equal(moduleObject.defaults.fadeSpeed, 3000);
        test.equal(moduleObject.defaults.morningStartTime, 5);
        test.equal(moduleObject.defaults.afternoonStartTime, 12);
        test.equal(moduleObject.defaults.eveningStartTime, 19);
        test.equal(moduleObject.defaults.random, true);
        test.equal(moduleObject.lastIndexUsed, -1)
        test.done();
    };
}());