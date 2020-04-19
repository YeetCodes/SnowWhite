## CurrencyRate module for MagicMirror

## Add this to modules array in config/config.js 

    {
			module: 'MMM-CurrencyRate',
			position: 'top_left',
			config: { 
				apiKEY: "API KEY", // fixer.io
				base: "GBP",                    // USD unless you upgrade from free account
				symbols: "USD,AUD,CAD,PLN,MXN"  // can't change unless you upgrade from free account
			}
	},
