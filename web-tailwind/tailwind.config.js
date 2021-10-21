module.exports = {
  	purge: [],
  	darkMode: false,
  	theme: {
    	extend: {
			screens: {
				'xs': {'max': '768px'}
			},
			backgroundImage: {
				'body-pattern': "url('../img/pattern.png')",
				'banner': "url('../img/bakbaner.png')",
			},
			backgroundPosition: {
				'banner-position' : "-300px -200px",
			},
			colors: {
				primary: '#fffff',
				blue: {
					light: '#37bcf9',
				  	dark: '#0370b9',
				}
			},
			animation: {
				'spin-low': 'spin 2s linear infinite',
				'from-bellow': 'fromBellow 500ms linear',
				'from-right': 'fromRight 300ms linear',
				'bg-banner': 'backBanner 10s linear',
				'text-banner': 'showBannerText 10s linear',
			},
			keyframes: {
				fromBellow:{
					'0%': { transform: 'translateY(0%)'},
					'50%': { transform: 'translateY(200%)'},
					'100%': { transform: 'translateY(0%)'}
				},
				fromRight:{
					'0%': { transform: 'translateX(200%)'},
					'100%': { transform: 'translateX(0%)'}
				},
				backBanner:{
					'0%': { 'background-position': '0px 0px'},
					'100%': { 'background-position': '-300px -200px'}
				},
				showBannerText:{
					'0%': { 
						transform: 'translateX(-600%) scale(5,5)',
						opacity: 1
					},
					'50%': { 
						transform: 'translateX(600%) scale(5,5)',
						opacity: 1
					},
					'75%': { 
						transform: 'translateX(-600%) scale(5,5)',
						'text-shadow': 'none',
						color: 'transparent',
						opacity: 0
					},
					'100%': { 
						transform: 'translateX(0%) scale(1,1)',
						'text-shadow': '2px 2px 1px black',
						color: 'white',
						opacity: 0
					},
				},
			},
		},
  	},
  	variants: {
		animation: ['responsive', 'hover','group-hover'],
        animate: ['responsive', 'hover', 'group-hover'],
  	},
  	plugins: [],
}