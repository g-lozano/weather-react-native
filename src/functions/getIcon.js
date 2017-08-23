const getIcon = (weather) => {
	switch(weather) {
		case 'Clear':
			return require('../weather_icons/Clear.png')
		case 'Thunderstorm':
			return require('../weather_icons/Thunderstorm.png')
		case 'Rain':
		case 'Drizzle':
			return require('../weather_icons/Rain.png')
		case 'Snow':
			return require('../weather_icons/Snow.png')
		case 'Clouds':
			return require('../weather_icons/Clear.png')
		default:
			return require('../weather_icons/Clear.png')
	}
}

export default getIcon