import axios from 'axios';
import {useEffect, useState} from 'react'
import './App.css';
import Scard from './Scard'
import Day from './Day'

const URL = 'https://api.openweathermap.org/data/2.5/onecall'
const API_KEY = '7f3dffb92ce65e07d9ad88c61652c776'

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [city, setCity] = useState("")
  const [temperature, setTemperature] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [icon, setIcon] = useState("");
  const[forecast, setForecast] = useState([])
  const [dicon, setDicon] = useState("")

  useEffect(()=>{
    
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      
    });
    axios.get(`${URL}?lat=${latitude}&lon=${longitude}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`)
    .then((weatherData)=>{
      console.log(weatherData.data)
      setTemperature(weatherData.data.current.temp)
      setSunset(weatherData.data.current.sunset)
      setSunrise(weatherData.data.current.sunrise)
      setHumidity(weatherData.data.current.humidity)
      setCity(weatherData.data.timezone)
      setIcon(weatherData.data.current.weather[0].main)
      setForecast(weatherData.data.daily)
      setDicon(weatherData.data.daily.weather[0].main)
    })
  }, [latitude, longitude])
  return (
    <div className="main">

      <div className= "header">Weather Forecast</div>
      <br/> <br/> <br/>
    <Scard 
    temperature = {temperature} 
    humidity = {humidity}
    sunset = {sunset}
    sunrise = {sunrise}
    city = {city}
    icon = {icon}


    
    /> 
    <Day 
    forecast = {forecast}
    dicon = {dicon}
    /> 
    </div>
  );
}

export default App;
