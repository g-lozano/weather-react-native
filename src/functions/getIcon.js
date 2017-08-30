const getIcon = (weather, timeOfDay) => {
	switch(weather) {
		case 'Clear':
			if(timeOfDay < 5 || timeOfDay > 17)
				return require('../weather_icons/moon-1.png')
			return require('../weather_icons/Clear.png')
		case 'Thunderstorm':
			return require('../weather_icons/Thunderstorm.png')
		case 'Rain':
		case 'Drizzle':
			return require('../weather_icons/Rain.png')
		case 'Snow':
			return require('../weather_icons/Snow.png')
		case 'Clouds':
			return require('../weather_icons/Clouds.png')
		default:
			if(timeOfDay < 5 || timeOfDay > 17)
				return require('../weather_icons/moon-1.png')
			return require('../weather_icons/Clear.png')
	}
}

export default getIcon
