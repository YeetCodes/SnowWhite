const request = require("request"); // for sending GET request
const NodeHelper = require("node_helper"); // node_helper superclass defined in MM/js/node_helper.js

module.exports = NodeHelper.create({
  start: function () {
    console.log("Starting node_helper for: " + this.name);
  },

  socketNotificationReceived: function (notification, payload) {
    if (notification === "GET_CurrencyRate") {
      this.getCurrencyRate(payload);
    }
  },

  getCurrencyRate: function (url) {
    request(
      {
        url: url,
        method: "GET",
      },
      (error, response, body) => {
        if (error) {
          return;
        } else if (response.statusCode == 200) {
          console.log(JSON.parse(body));
          this.sendSocketNotification("CurrencyRate_RESULT", JSON.parse(body));
        }
      }
    );
  },
});
