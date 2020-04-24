/*global exports, require, console, global */
(function() {
  "use strict";

  var moduleObject;
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  var mock = require("nodeunit-mock");

  function initialiseModule() {
    require("./MMM-Demotivational.js");
  }

  global.Module = {
    register: function(name, moduleObjectArgument) {
      var doNothing = function(nothing) {
        return nothing;
      };
      doNothing(name);

      moduleObjectArgument.config = {};

      moduleObject = moduleObjectArgument;
    }
  };

  exports.testInitalValues = function(test) {
    initialiseModule();
    test.equal(
      moduleObject.defaults.demotivators.anytime[0],
      "For every winner, there are dozens of losers.\nOdds are you are one of them."
    );
    test.equal(moduleObject.defaults.updateInterval, 5000);
    test.equal(moduleObject.defaults.fadeSpeed, 3000);
    test.equal(moduleObject.defaults.morningStartTime, 5);
    test.equal(moduleObject.defaults.afternoonStartTime, 12);
    test.equal(moduleObject.defaults.eveningStartTime, 19);
    test.equal(moduleObject.defaults.random, true);
    test.equal(moduleObject.lastIndexUsed, -1);
    test.done();
  };

  exports.domTest = function(test) {
    initialiseModule();
    var dom = new JSDOM("<!doctype html><html><body></body></html>");
    var window = dom.window;
    var document = window.document;
    console.log(moduleObject.config);
    mock(test, moduleObject, "randomDemotivator", function() {
      return "hello ugly!";
    });
    var wrapper = moduleObject.getDom(document);
    test.equal(
      wrapper.outerHTML,
      '<div class="thin xlarge bright pre-line"><span>hello ugly!</span></div>'
    );
    test.done();
  };
})();
