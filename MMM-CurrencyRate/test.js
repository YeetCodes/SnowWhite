/*global exports, require, console, global */
(function () {
  "use strict";

  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  var moduleObject, dummy;

  function initialiseModule() {
    require("./MMM-CurrencyRate.js");
    dummy = {
      success: true,
      timestamp: 1519296206,
      base: "EUR",
      date: "2020-04-19",
      rates: {
        AUD: 1.566015,
        CAD: 1.560132,
        CHF: 1.154727,
        CNY: 7.827874,
        GBP: 0.882047,
        JPY: 132.360679,
        USD: 1.23396,
      },
    };
    moduleObject.receiveRates(dummy);
  }

  global.Module = {
    register: function (name, moduleObjectArgument) {
      var doNothing = function (nothing) {
        return nothing;
      };
      doNothing(name);

      moduleObjectArgument.config = {};
      moduleObject = moduleObjectArgument;

      moduleObject.updateDom = function (time) {
        return;
      };
    },
  };

  exports.testInitialValues = function (test) {
    initialiseModule();
    test.equal(moduleObject.defaults.fetchTime, 6000000);
    test.equal(moduleObject.defaults.base, "GBP");
    test.equal(1, 1);
    test.done();
  };

  exports.testReceiveRates = function (test) {
    initialiseModule();
    moduleObject.receiveRates("some rates");
    test.equal(moduleObject.CurrencyRate, "some rates");
    test.equal(moduleObject.fetched, true);
    test.done();
  };

  exports.testSocketNotificationReceived = function (test) {
    initialiseModule();
    moduleObject.socketNotificationReceived(
      "CurrencyRate_RESULT",
      "some new rates"
    );
    test.equal(moduleObject.CurrencyRate, "some new rates");
    test.done();
  };

  exports.domTest = function (test) {
    initialiseModule();
    var dom = new JSDOM("<!doctype html><html><body></body></html>");
    var window = dom.window;
    var document = window.document;
    console.log(moduleObject.config);
    var wrapper = moduleObject.getDom(document);
    test.equal(
      wrapper.outerHTML,
      '<div class="wrapper"><div class="small bright">Base Currency is EUR</div><div class="align-left medium bright">AUD   1.566015</div><div class="align-left medium bright">CAD   1.560132</div><div class="align-left medium bright">CHF   1.154727</div><div class="align-left medium bright">CNY   7.827874</div><div class="align-left medium bright">GBP   0.882047</div><div class="align-left medium bright">JPY   132.360679</div><div class="align-left medium bright">USD   1.23396</div></div>'
    );
    test.done();
  };
})();
