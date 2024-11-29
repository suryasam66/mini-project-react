import SearchBox from "./SearchBox.jsx";
import InfoBox from "./InfoBox.jsx";
import {useState} from "react";
import React from "react";
export default function WeatherApp() {
    const [weatherInfo , setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 24.24,
        temp: 25.05,
        tempMin: 25.05,
        tempMax:25.05,
        humidity:47,
        weather:"haze",
    });
    
    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }
    return (
        
        
        <div style={{textAlign: "center"}}>
            <header style={{color: "#00008B", fontSize: "54px"}}><b>WeatherWise</b> </header>
            <main> <SearchBox  updateInfo={updateInfo}/>
              <InfoBox info={weatherInfo}/></main>
             
        </div> 
        

    )
}