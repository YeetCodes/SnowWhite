Module.register("MMM-CurrencyRate", {
  // default configuration
  defaults: {
    apiKEY: "", // from fixer.io
    base: "GBP", // GBP is for free
    symbols: "",
    fetchTime: 6000000, // only 1000 api calls are for free
  },

  start: function () {
    Log.info("Starting module: " + this.name);

    this.url =
      "http://data.fixer.io/api/latest?access_key=" +
      this.config.apiKEY +
      "&symbols=" +
      this.config.symbols; // + "&base=" + this.config.base;
    // if your API plan includes base currency choice
    this.CurrencyRate = {};
    this.fetchNewRates();
  },

  getDom: function (temp_doc) {
    if (typeof document === "undefined") {
      // unit test case
      document = temp_doc;
    }
    var wrapper = document.createElement("div");
    wrapper.className = "wrapper";

    if (!this.fetched) {
      wrapper.innerHTML = this.translate(
        "Waiting to fetch up to date exchange rates"
      );
      wrapper.classList.add("bright", "medium");
      return wrapper;
    }

    var CurrencyRate = this.CurrencyRate;

    var top = document.createElement("div");
    top.classList.add("list-row");

    var base = document.createElement("div");
    base.classList.add("small", "bright");
    base.innerHTML = "Base Currency is " + this.CurrencyRate.base;
    wrapper.appendChild(base);

    var pair = document.createElement("th");
    pair.classList.add("align-left", "small", "bright");
    document.createElement("tr").appendChild(pair);

    for (var curr in CurrencyRate.rates) {
      var newElement = document.createElement("div");
      newElement.classList.add("align-left", "medium", "bright");
      newElement.innerHTML += curr + "   " + CurrencyRate.rates[curr];
      wrapper.appendChild(newElement);
    }

    return wrapper;
  },

  receiveRates: function (data) {
    this.CurrencyRate = data;
    this.fetched = true;
  },

  fetchNewRates: function () {
    setInterval(() => {
      this.getCurrencyRate();
    }, this.config.fetchTime);
    this.getCurrencyRate(5000);
  },

  socketNotificationReceived: function (notification, payload) {
    if (notification === "CurrencyRate_RESULT") {
      this.receiveRates(payload);
      this.updateDom(3000);
    }
    this.updateDom(5000);
  },

  getCurrencyRate: function () {
    this.sendSocketNotification("GET_CurrencyRate", this.url);
  },
});
