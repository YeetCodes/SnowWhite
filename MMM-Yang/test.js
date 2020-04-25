/*global exports, require, global */
(function () {
  "use strict";

  var moduleObject;
  const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
  var mock = require("nodeunit-mock");

  function initialiseModule() {
    require("./MMM-Yang.js");
  }

  global.Module = {
    register: function (name, moduleObjectArgument) {
      var doNothing = function (nothing) {
        return nothing;
      };
      doNothing(name);

      moduleObjectArgument.config = {};

      moduleObject = moduleObjectArgument;
    },
  };

  exports.testInitalValues = function (test) {
    initialiseModule();
    test.equal(moduleObject.defaults.yourName, "Yang Yang");
    test.equal(moduleObject.defaults.randomText, "you look amazing today!");
    test.equal(moduleObject.defaults.opacity, 1.0);
    test.equal(moduleObject.defaults.borderRadius, "50%");
    test.equal(moduleObject.defaults.updateInterval, 3000);
    test.equal(moduleObject.defaults.fadeSpeed, 1000);
    test.equal(moduleObject.defaults.afternoonEndTime, 17);
    test.done();
  };

  exports.domTest = function (test) {
    initialiseModule();
    var dom = new JSDOM("<!doctype html><html><body></body></html>");
    var window = dom.window;
    var document = window.document;
    console.log(moduleObject.config);
    mock(test, moduleObject, "randomUrl", function () {
      return "some/url/to/img";
    });
    mock(test, moduleObject, "randomCompliment", function () {
      return "hi ugly";
    });
    var wrapper = moduleObject.getDom(document);
    test.equal(
      wrapper.outerHTML,
      '<div class="small bright pre-line"><img src="some/url/to/img"><div class="small bright pre-line">NaN</div>hi ugly</div>'
    );
    test.done();
  };
})();
