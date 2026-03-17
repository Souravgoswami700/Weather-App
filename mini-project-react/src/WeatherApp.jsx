import { useState } from 'react';//api
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
export default function WeatherApp(){
    const  [weatherInfo,setWeatherinfo]=useState({
        city:"Delhi",
        feelslike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",

    
    });
    let updateInfo=(newInfo)=>{
       setWeatherinfo(newInfo);
    }
    console.log(weatherInfo);
    return (
    <div style={{textAlign:"center"}}>
        <h2> Weather App By Sourav</h2>
        <SearchBox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
        </div>
        );
}