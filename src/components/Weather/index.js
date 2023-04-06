import React, { useEffect, useState } from 'react'
import axios from 'axios'
import * as S from './styles'
import Loading from '../Loading'

const API_KEY = '199d316d7e4561a56d32bef749a23879'

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null)
  //   const [location, setLocation] = useState({ latitude: null, longitude: null });

  //   useEffect(() => {
  //     const successCallback = (position) => {
  //       setLocation({
  //         latitude: position.coords.latitude,
  //         longitude: position.coords.longitude,
  //       });
  //     };

  //     const errorCallback = (error) => {
  //       console.error(error);
  //     };

  //     navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  //   }, []);

  //   console.log(location);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?lat=-12.974722&lon=-38.476665&lang=pt_br&appid=${API_KEY}&units=metric`
      )
      setWeatherData(response.data)
    }
    fetchData()
  }, [])

  return (
    <S.Container>
      {weatherData ? (
        <>
          <S.City>{weatherData.name}</S.City>
          <S.Temperature>{Math.round(weatherData.main.temp)}°C</S.Temperature>
          <S.Description>
            {weatherData.weather[0].description}
            <S.Icon
              src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
              alt='weather icon'
            />
          </S.Description>
        </>
      ) : (
        <S.Loading><Loading /></S.Loading>
      )}
    </S.Container>
  )
}

export default Weather
