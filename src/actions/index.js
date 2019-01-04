import * as types from "./ActionTypes";
import axios from "axios";
export const cityChange = city => ({
  type: types.CITY_CHANGE,
  payload: city.value
});

const getWeatherStart = () => ({
  type: types.GET_WEATHER_START
});
const getWeatherFail = err => ({
  type: types.GET_WEATHER_FAIL,
  payload: err
});
const getWeatherSuccess = cityWeather => ({
  type: types.GET_WEATHER_SUCCESS,
  payload: {
    name: cityWeather.name,
    weatherCondition: cityWeather.weather[0].main,
    wind: cityWeather.wind.speed,
    temp: cityWeather.main.temp,
    pressure: cityWeather.main.pressure,
    humidity: cityWeather.main.humidity,
    date: new Date()
  }
});
const key = "&appid=ab612ebf5375d77352246f16e80ad5c7";
const baseUrl = "http://api.openweathermap.org/data/2.5/weather?q=";
export const getWeather = (city, metric) => dispatch => {
  dispatch(getWeatherStart());
  setTimeout(
    () =>
      axios
        .get(`${baseUrl}${city}${key}&units=${metric}`)
        .then(({ data }) => dispatch(getWeatherSuccess(data)))
        .catch(err => dispatch(getWeatherFail(err.response))),
    1000
  );
};

export const metricChange = metric => ({
  type: types.METRIC_CHANGE,
  payload: metric.value
});

// export const getWeather =
