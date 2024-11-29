import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import React from "react";

//import for icons
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import "./InfoBox.css"

export default function InfoBox({ info }) {
    const INIT_URL = "https://images.hindustantimes.com/rf/image_size_960x540/HT/p2/2018/06/12/Pictures/weather-mild-dust-storm-in-delhi_c7e39512-6e63-11e8-9a75-8898ac94ce9e.jpg";
    const HOT_URL ="https://cardinalwxservice.com/wp-content/uploads/2019/09/Fall-1.jpg";
    const COLD_URL ="https://wallpapercave.com/wp/wp3335308.jpg";
    const RAINY_URL ="https://wallpapercave.com/wp/wp6536523.jpg";

return (
 <div>
        
   <div className="cardContainer"> 
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 80 ? RAINY_URL : info.temp > 20 ? HOT_URL : COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          <div className="setIconColor">
          {info.city}{info.humidity > 80 ? <p style={{color: "lightblue"}}> <ThunderstormIcon /> </p> 
                      : info.temp > 15 ? <p style={{color: "red"}}> <WbSunnyIcon /> </p> 
                       : <p style={{color: "blue"}}> <AcUnitIcon /> </p>
                     }
          </div>
        </Typography><hr/>
        <Typography variant="body2" color="text.secondary" component="span">
          <div><b>Temparature :</b> {info.temp}&deg;C</div>
          <div><b>Humidity :</b> {info.humidity}%</div>
          <div><b>Max Temparature :</b> {info.tempMax}&deg;C</div>
          <div><b>Min Temparature :</b> {info.tempMin}&deg;C</div>
          <div><b>Feels Like</b> : {info.feelsLike}&deg;C</div>
          <div><b>Weather</b> : {info.weather} </div>
        </Typography>
      </CardContent>
      
     </Card>
    </div> 
 </div>
   );
}