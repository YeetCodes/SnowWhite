Module.register("MMM-Yang", {

	requiresVersion: "2.1.0",

	defaults: {
		// Add your name.
		yourName: "Yang Yang",
		// Add some random text	
		randomText: "you look amazing today!",
		// Transparency of the picture.
		opacity: 1.0,
		// Maximum width of the picture.
		maxWidth: "5%",
		// Maximum height of the picture.
		maxHeight: "5%",
		// Border-Radius of the picture.
		borderRadius: "50%",
		// Compliments
		compliments: { 
			day_sunny: [ 
				"Today it is sunny, get out!", 
				"Remember to wear your sunglasses~~~" 
			], 
			snow: [ 
				"Today it gets snowy, dress well.", 
				"Wanna play snowball? call your friend~ " 
			], 
			cloudy: [ 
				"Do you know the newest movie?!", 
				"Today it gets cloudy, okay to stay inside.", 
				"Maybe watch some seires, get your popcorn" 
			], 
			day_cloudy: [ 
				"Do you know the newest movie?!", 
				"Today it gets cloudy, okay to stay inside.", 
				"Maybe watch some seires, get your popcorn" 
			], 
			cloudy_windy: [ 
				"Today, there is a lot of wind, dress well, can get cold..", 
				"Be caseful, cloudy and windy day" 
			], 
			showers: [ 
				"Today its rain, remember umbrella.", 
				"Hahah, go out and take FREE shower!" 
			], 
			rain: [ 
				"Today its rain, remember umbrella.", 
				"I like rainy day, what about you?" 
			], 
			thunderstorm: [ 
				"Today its thunderstorm", 
				"Dont worry about thunderstorm, I will protect you." 
			], 
			night_cloudy: [ 
				"Tonight it gets cold and cloudy.", 
				"I bet you'd like to sleep early.", 
				"I'd like to stay in bed in this weather~~~" 
			], night_clear: [ 
				"It is clear sky tonight", 
				"Wanna go out for a walk?" 
			], night_showers: [ 
				"If you are going out tonight, bring an umbrella", 
				"Dangerous outside!", 
				"I'd like to stay in bed in this weather~~~" 
			], night_rain: [ 
				"If you are going out tonight, bring an umbrella", 
				"Dangerous outside!", 
				"I'd like to stay in bed in this weather~~~" 
			], night_thunderstorm: [ 
				"Tonight there will be a thunderstorm, take out power cords.", 
				"Dangerous outside!", "I'd like to stay in bed in this weather~~~" 
			], night_snow: [ 
				"Cold and snow.", 
				"I'd like to stay in bed in this weather~~~" 
			], night_alt_cloudy_windy: [ 
				"Varying weather.", 
				"I'd like to stay in bed in this weather~~~" 
			], fog: [ 
				"Poor visibility! Drive carefully.", 
				"Do yo like fog? Sometimes it is harmless~" ] 
		},
		images: {
			day_sunny: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/sunny1.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/sunny2.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/sunny3.jpg"
						],
						snow: [
								"https://raw.githubusercontent.com/XueYing126/imgs/master/snow1.jpg",
								"https://raw.githubusercontent.com/XueYing126/imgs/master/snow2.jpg",
								"https://raw.githubusercontent.com/XueYing126/imgs/master/snow3.jpg",
						],
						cloudy: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/cloudy1.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/cloudy2.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/cloudy3.jpg"
						],
						day_cloudy: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/cloudy1.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/cloudy2.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/cloudy3.jpg"
						],
						cloudy_windy: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/cloudy1.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/cloudy2.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/cloudy3.jpg"
						],
						showers: [
								"https://raw.githubusercontent.com/XueYing126/imgs/master/storm1.jpg",
								"https://raw.githubusercontent.com/XueYing126/imgs/master/rain1.jpg",
								"https://raw.githubusercontent.com/XueYing126/imgs/master/rain3.jpg"
						],
						rain: [
							"https://github.com/XueYing126/imgs/blob/master/rain1.jpg",
							"https://github.com/XueYing126/imgs/blob/master/rain2.jpg",
							"https://github.com/XueYing126/imgs/blob/master/rain3.jpg"
						],
						thunderstorm: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_rain.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_rain2.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_rain3.jpg"
						],
						night_cloudy: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang1.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang2.jpg"
						],
						night_clear: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_clear.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang1.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang2.jpg"
						],
						night_showers: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_rain.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_rain2.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_rain3.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang1.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang2.jpg"
						],
						night_rain: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_rain.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_rain2.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_rain3.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang1.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang2.jpg"
						],
						night_thunderstorm: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/storm1.jpg",
								"https://raw.githubusercontent.com/XueYing126/imgs/master/rain1.jpg",
								"https://raw.githubusercontent.com/XueYing126/imgs/master/rain3.jpg",
								"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang1.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang2.jpg"
						],
						night_snow: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_snow.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_snow2.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_snow3.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang1.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang2.jpg"
						],
						night_alt_cloudy_windy: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang1.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/night_yang2.jpg"
						],
						fog: [
							"https://raw.githubusercontent.com/XueYing126/imgs/master/fog1.jpg",
							"https://raw.githubusercontent.com/XueYing126/imgs/master/fog2.jpg"
						]
		},
		updateInterval: 3000,
		remoteFile: null,
		fadeSpeed: 1000,
		morningStartTime: 3,
		morningEndTime: 12,
		afternoonStartTime: 12,
		afternoonEndTime: 17
	},

	// Set currentweather from module
	currentWeatherType: "",

	// Define required scripts.
	getScripts: function() {
		return ["moment.js"];
	},

	// Define required scripts.
	getStyles: function () {
		return ["font-awesome5.css", "font-awesome5.v4shims.css"];
	},
  	
  	start: function() {	
		Log.info("Starting module: " + this.name);
		
		this.lastComplimentIndex = -1;
		this.lastComplimentIndex2 = -1;

		var self = this;
		if (this.config.remoteFile != null) {
			this.complimentFile(function(response) {
				self.config.compliments = JSON.parse(response);
				self.updateDom();
			});
		}

		// Schedule update timer.
		setInterval(function() {
			self.updateDom(self.config.fadeSpeed);
		}, this.config.updateInterval);
		
	},

	/* randomIndex(compliments)
	 * Generate a random index for a list of compliments.
	 *
	 * argument compliments Array<String> - Array with compliments.
	 *
	 * return Number - Random index.
	 */
	randomIndex: function(compliments) {
		if (compliments.length === 1) {
			return 0;
		}

		var generate = function() {
			return Math.floor(Math.random() * compliments.length);
		};

		var complimentIndex = generate();

		while (complimentIndex === this.lastComplimentIndex) {
			complimentIndex = generate();
		}

		this.lastComplimentIndex = complimentIndex;

		return complimentIndex;
	},

	randomIndex2: function(compliments) {
		if (compliments.length === 1) {
			return 0;
		}

		var generate = function() {
			return Math.floor(Math.random() * compliments.length);
		};

		var complimentIndex = generate();

		while (complimentIndex === this.lastComplimentIndex2) {
			complimentIndex = generate();
		}

		this.lastComplimentIndex2 = complimentIndex;

		return complimentIndex;
	},

	/* complimentArray()
	 * Retrieve an array of compliments for the time of the day.
	 *
	 * return compliments Array<String> - Array with compliments for the time of the day.
	 */
	complimentArray: function() {
		var hour = moment().hour();
		var compliments;

		if (hour >= this.config.morningStartTime && hour < this.config.morningEndTime && this.config.compliments.hasOwnProperty("morning")) {
			compliments = this.config.compliments.morning.slice(0);
		} else if (hour >= this.config.afternoonStartTime && hour < this.config.afternoonEndTime && this.config.compliments.hasOwnProperty("afternoon")) {
			compliments = this.config.compliments.afternoon.slice(0);
		} else if(this.config.compliments.hasOwnProperty("evening")) {
			compliments = this.config.compliments.evening.slice(0);
		}

		if (typeof compliments === "undefined") {
			compliments = new Array();
		}

		if (this.currentWeatherType in this.config.compliments) {
			compliments.push.apply(compliments, this.config.compliments[this.currentWeatherType]);
		}

		compliments.push.apply(compliments, this.config.compliments.anytime);

		return compliments;
	},

	imageArray: function() {
		var images = new Array();
	
		if (this.currentWeatherType in this.config.images) {
			images.push.apply(images, this.config.images[this.currentWeatherType]);
		}

		return images;
	},

	/* complimentFile(callback)
	 * Retrieve a file from the local filesystem
	 */
	complimentFile: function(callback) {
		var xobj = new XMLHttpRequest(),
			isRemote = this.config.remoteFile.indexOf("http://") === 0 || this.config.remoteFile.indexOf("https://") === 0,
			path = isRemote ? this.config.remoteFile : this.file(this.config.remoteFile);
		xobj.overrideMimeType("application/json");
		xobj.open("GET", path, true);
		xobj.onreadystatechange = function() {
			if (xobj.readyState == 4 && xobj.status == "200") {
				callback(xobj.responseText);
			}
		};
		xobj.send(null);
	},

	/* complimentArray()
	 * Retrieve a random compliment.
	 *
	 * return compliment string - A compliment.
	 */
	randomCompliment: function() {
		var compliments = this.complimentArray();
		var index = this.randomIndex(compliments);

		return compliments[index];
	},

	randomUrl: function() {
		var images = this.imageArray();
		var index = this.randomIndex2(images);

		return images[index];
	},

	getDom: function() {
  		var element = document.createElement("div");
		var wrapper = document.createElement("div");
		var image = document.createElement("img");
  		
  		element.innerHTML = this.config.yourName + this.config.randomText;
		element.className = this.config.classes ? this.config.classes : "small bright pre-line";
		  
		var url =this.randomUrl();
		image.src = url
		image.style.maxWidth = this.config.maxWidth;
		image.style.maxHeight = this.config.maxHeight;
		image.style.opacity = this.config.opacity;
		image.style.borderRadius = this.config.borderRadius;

		var complimentText = this.randomCompliment();

		var compliment = document.createTextNode(complimentText);
		wrapper = document.createElement("div");
		wrapper.className = this.config.classes ? this.config.classes : "small bright pre-line";
    
		wrapper.appendChild(image);
		wrapper.appendChild(element);
		wrapper.appendChild(compliment);
		return wrapper;
	},
    
	// From data currentweather set weather type
	setCurrentWeatherType: function(data) {
		var weatherIconTable = {
			"01d": "day_sunny", 
			"02d": "day_cloudy",
			"03d": "cloudy",
			"04d": "cloudy_windy",
			"09d": "showers",
			"10d": "rain",
			"11d": "thunderstorm",
			"13d": "snow",
			"50d": "fog",
			"01n": "night_clear",
			"02n": "night_cloudy",
			"03n": "night_cloudy",
			"04n": "night_cloudy",
			"09n": "night_showers",
			"10n": "night_rain",
			"11n": "night_thunderstorm",
			"13n": "night_snow",
			"50n": "night_alt_cloudy_windy"
		};
		this.currentWeatherType = weatherIconTable[data.weather[0].icon];
	},


	// Override notification handler.
	notificationReceived: function(notification, payload) {
		if (notification == "CURRENTWEATHER_DATA") {
			this.setCurrentWeatherType(payload.data);
		}
	},

});

