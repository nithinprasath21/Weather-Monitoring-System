import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function BoxData() {
  const [tempin, setTempin] = useState(null);
  const [tempout, setTempout] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windspeed, setWindspeed] = useState(null);
  const [rainrate, setRainrate] = useState(null);
  const [uv, setUv] = useState(null);
  // const [error, setError] = useState(null);
  const [icon, setIcon] = useState(null);
  const [desc, setDesc] = useState(null);
    
  useEffect(() => {
    axios.get('https://back-djyc.vercel.app/process/api')
      .then(response => {
        setTempin(response.data.tempin);
        setTempout(response.data.tempout);
        setHumidity(response.data.humidity);
        setWindspeed(response.data.windspeed);
        setRainrate(response.data.rainrate);
        setUv(response.data.uv);
        setIcon(response.data.icon);
        setDesc(response.data.desc);
      })
      // .catch(error => {
      //   setError(console.log(error));
      // });
  }, []);
  const imageUrl = `./Weather-SVG/${icon}.svg`;
    return(
      <div className="box">
        <div className="box1">
          <div className='logo1'>
            <img src={imageUrl} alt="logo" className="image" />
            <h4>{desc}</h4>
          </div>
          <div className="text">
            <span>{tempout}°C</span>
            <h4>Outside Temperature</h4>
          </div>
          <div className="text">
            <span>{tempin}°C</span>
            <h4>Inside Temperature</h4>
          </div>
        </div>
        <div className="container2">
          <div className='container2-content'>
            <div className='container2-image'>
              <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/humidity.svg'} width={100} alt='icon'/>
            </div>
            <div className='container2-text'>
              <span>{humidity} %</span>
              <h4>Humidity</h4>
            </div>
          </div>
          <div className='container2-content'>
            <div className='container2-image'>
              <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/wind.svg'} width={100} alt='icon'/>
            </div>
            <div className='container2-text'>
              <span>{windspeed} Km/Hr</span>
              <h4>Wind Speed</h4>
            </div>
          </div>
          <div className='container2-content'>
            <div className='container2-image'>
              <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/pressure-low.svg'} width={100} alt='icon'/>
            </div>
            <div className='container2-text'>
              <span>{rainrate} mm</span>
              <h4>Rain Rate</h4>
            </div>
          </div>
          <div className='container2-content'>
            <div className='container2-image'>
              <img src={'https://bmcdn.nl/assets/weather-icons/v3.0/fill/svg/sunset.svg'} width={100} alt='icon'/>
            </div>
            <div className='container2-text'>
              <span>{uv}</span>
              <h4>UV Index</h4>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BoxData;