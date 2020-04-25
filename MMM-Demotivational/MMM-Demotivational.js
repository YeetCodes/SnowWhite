Module.register(
  "MMM-Demotivational",
  {
    defaults: {
      demotivators: {
        anytime: [
          "For every winner, there are dozens of losers.\nOdds are you are one of them.",
          "Just because we accept you as you are\ndoesn't mean we've abandoned hope you'll improve.",
          "Hope.\nAlways the first step on the road to disappointment.",
          "The road to success is paved with failures.\nSo is the road to failure.",
          "If you think things are bad now,\ndon't worry, it will get worse!",
          "It's okay to relax today and do nothing.\nJust like it was okay for the every past day of your life!",
          "If life doesn't break you today\nDon't Worry!\nIt will try again tomorrow.",
          "They say the first step to success is to try.\nFor you, it's the first step to failure.",
          "You're the one who turned our team around.\nWe failed miserably. Thanks.",
          "You think your Mondays are bad?\nWait til you hear about your coworkers who have to see your face.",
          "Some people play video games to get feel amazing about themselves.\nWe just have to compare ourselves to you.",
        ],
        morning: [],
        afternoon: [],
        evening: [],
      },
      updateInterval: 5000,
      fadeSpeed: 3000,
      morningStartTime: 5,
      afternoonStartTime: 12,
      eveningStartTime: 19,
      random: true,
    },
    lastIndexUsed: -1,
    /*init:function()
        {
    
        },*/
    start: function () {
      Log.info(
        "======================================\n" +
          "| Starting up the Demotivator Module |\n" +
          "======================================\n"
      );

      this.lastDemotivatorIndex = -1;

      var self = this;

      setInterval(() => {
        self.updateDom(self.config.fadeSpeed);
      }, this.config.updateInterval);
    },
    getScripts: function () {
      return ["moment.js"];
    },
    /*getStyles:function()
        {
    
        },
        getTranslations:function()
        {
    
        },*/
    randomIndex: function (demotivators) {
      if (demotivators.length === 1) {
        return 0;
      }

      var generate = function () {
        return Math.floor(Math.random() * demotivators.length);
      };

      var demotivatorIndex = generate();

      while (demotivatorIndex === this.lastDemotivatorIndex) {
        demotivatorIndex = generate();
      }

      this.lastDemotivatorIndex = demotivatorIndex;

      return demotivatorIndex;
    },
    demotivatorArray: function () {
      var hour = moment().hour();
      var demotivators;
      if (
        hour >= this.config.morningStartTime &&
        hour < this.config.afternoonStartTime
      ) {
        demotivators = this.config.demotivators.morning.slice(0);
      } else if (
        hour >= this.config.afternoonStartTime &&
        hour < this.config.eveningStartTime
      ) {
        demotivators = this.config.demotivators.afternoon.slice(0);
      } else if (
        hour >= this.config.afternoonStartTime &&
        hour < this.config.eveningStartTime
      ) {
        demotivators = this.config.demotivators.evening.slice(0);
      }

      demotivators.push.apply(demotivators, this.config.demotivators.anytime);

      return demotivators;
    },
    randomDemotivator: function () {
      var demotivators = this.demotivatorArray();
      let index = 0;
      if (this.config.random) {
        index = this.randomIndex(demotivators);
      } else {
        index =
          this.lastIndexUsed >= demotivators.length - 1
            ? 0
            : ++this.lastIndexUsed;
      }
      return demotivators[index];
    },

    getDom() {
      var wrapper = document.createElement("div");
      wrapper.className = this.config.classes
        ? this.config.classes
        : "thin xlarge bright pre-line";
      var demotivatorText = this.randomDemotivator();
      var parts = demotivatorText.split("\n");
      var demotivator = document.createElement("span");
      for (part of parts) {
        demotivator.appendChild(document.createTextNode(part));
        demotivator.appendChild(document.createElement("BR"));
      }
      demotivator.lastElementChild.remove();
      wrapper.appendChild(demotivator);

      return wrapper;
    },
    /*getHeader()
        {
    
        },
        notificationReceived:function(notification,payload,sender)
        {
    
        },
        suspend:function()
        {
    
        },
        resume:function()
        {
    
        }*/
  } //end MMM-Demotivational definition
);
