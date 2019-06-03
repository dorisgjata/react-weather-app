import React from 'react';
import { Box, Grommet, Text, Anchor, Button } from 'grommet';
import axios from 'axios';
import APIKEY from './APIKEY.js';
const theme = {
	global: {
		colors: {
			blue: '#ADD8E6'
		},
		font: {
			family: 'Roboto',
			size: '14px',
			height: '20px'
		}
	}
};
const today = new Date();
const date = today.getDate();
const day = today.getDay();
const monthNum = today.getMonth();
const year = today.getFullYear();
//TODO: time
const time = today.getTime();
const daysName = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];
const monthsName = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December'
];

const weekDay = daysName.find((item, index) => {
	if (day === index + 1) return item;
});
const month = monthsName.find((item, index) => {
	if (monthNum === index) return item;
});
const fullDate = date + ', ' + weekDay + ' ' + month + ' ' + year;
export default class App extends React.Component {
	state = {
		city: '',
		country: '',
		temp: '',
		temp_max: '',
		temp_min: '',
		humidity: '',
		pressure: '',
		wind_speed: '',
		wind_deg: '',
		weather_main: '',
		weather_desc: ''
	};
	getWeatherById = (id) => {
		//hourly weather every 3 hr
		const url = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&APPID=${APIKEY}`;
		const responseType = 'json';
		axios.get(url, responseType).then((response) => {
			const data = response.data;
			const city = data.city.name;
			const country = data.city.country;
			const temp = data.list[0].main.temp;
			const temp_min = data.list[0].main.temp_min;
			const temp_max = data.list[0].main.temp_max;
			const pressure = data.list[0].main.pressure;
			const humidity = data.list[0].main.humidity;
			const weather_main = data.list[0].weather.main;
			const weather_desc = data.list[0].weather.weather_desc;
			const wind_deg = data.list[0].wind.deg;
			const wind_speed = data.list[0].wind.speed;
			console.log(data);
		});
	};
	getWeatherByCityCountry = (city, country) => {
		//current weather
		const url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIKEY}`;
		const responseType = 'json';
		axios.get(url, responseType).then((response) => {			
			const data = response.data;
			const dt = data.dt;
			//can use id to get hourly weather
			const id = data.id;
			const city = data.name;
			const country = data.sys.country;
			const clouds = data.clouds.all;
			const sunrise = data.sys.sunrise;
			const sunset = data.sys.sunrise;
			const temp = data.main.temp;
			const temp_min = data.main.temp_min;
			const temp_max = data.main.temp_max;
			const pressure = data.main.pressure;
			const humidity = data.main.humidity;
			const weather_main = data.weather[0].main;
			const weather_desc = data.weather[0].description;
			const wind_deg = data.wind.deg;
			const wind_speed = data.wind.speed;
			const todays = new Date();
			const date = todays.getDate();
			const day = todays.getDay();
			const monthNum = todays.getMonth();
			const year = todays.getFullYear();
			//TODO: get time
			const time = todays.getTime();
			console.log(
				data,
				id,
				city,
				country,
				clouds,
				sunrise,
				sunset,
				temp,
				temp_min,
				temp_max,
				pressure,
				humidity,
				weather_main,
				weather_desc,
				wind_deg,
				wind_speed
			);
		});
	};
	render() {
		this.getWeatherById(524901);
		this.getWeatherByCityCountry('London', 'uk');
		console.log(date, weekDay, month, year, daysName, day);
		return (
			<Grommet theme={theme}>
				<Box justify="center" direction="row-responsive" align="center" pad="large" gap="medium">
					<Box
						background="linear-gradient(to top,  #04befe   0%,  #209cff 100%)"
						align="center"
						pad="medium"
						gap="medium"
						round
					>
						<Box justify="center">
							<Box pad="xsmall">
								<Text color="white">{fullDate}</Text>
							</Box>
						</Box>
						<Text color="white">42*</Text>
					</Box>
				</Box>
			</Grommet>
		);
	}
}
