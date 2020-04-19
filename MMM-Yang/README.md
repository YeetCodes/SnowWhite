# MMM-Yang
Yang Yang reminds you to take your umbrella in rainy days!
Based on Default compliments and current weather.

You must use it with the default currentweather module. (Use openweathermap.org API key)
Budapest ID: 3054643


### Screenshot


<img style="flat: left; width: 50%;" src="Screenshot/MMM-Yang.png">



## Usage

_Prerequisites_

- Requires MagicMirror v2.1.0

### Installation

In your terminal, go to your MagicMirror's Module folder:

```
cd ~/MagicMirror/modules
```

Clone this repository

```

Add some [config entries](#configuration) with the atleast the requierd [options](#options) in your config.js file. 

### Configuration

```
{
		module: "currentweather",
		position: "top_right",	
		config: {
			
			location: "",
			locationID: "3054643", //Budapest
			appid: "****abcde12345abcde12345abcde12345ab" //openweathermap.org API key.
		}
	}

```javascript
{
        module: "MMM-Yang",
        position: "top_left",
        config: {
                // Transparency of the picture.
                opacity: 1.0,
                // Maximum width of the picture.
                maxWidth: "100%",
                // Maximum height of the picture.
                maxHeight: "100%",
                // Border-Radius of the picture.
                borderRadius: "10%",
                yourName: "Hi, Cutie! ",
                // Add some random text to show.
                randomText: "",
                // Compliments
                
                }
},

