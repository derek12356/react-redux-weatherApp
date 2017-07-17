const API_KEY = 'c0f162c6420e88cefdedcd4b0de5bc73' ; 
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
import axios from 'axios';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url); 



	return {
		type: FETCH_WEATHER,
		payload: request,
	};
}
