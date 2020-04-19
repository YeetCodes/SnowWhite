/*global exports, require, console, global */
(function () {
    'use strict';

    var moduleObject, modulesList, i, hideFunction, showFunction;

    function initialiseModule() {
        require('./MMM-CurrencyRate.js');
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

    exports.dummyTest = function (test) {
        initialiseModule();
        test.equal(1,1);
        test.done();
    };
}());
