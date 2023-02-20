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
    axios.get('http://192.168.29.79:8000/process/api')
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
            <span>{tempin}°C</span>
            <h4>Inside Temperature</h4>
          </div>
          <div className="text">
            <span>{tempout}°C</span>
            <h4>Outside Temperature</h4>
          </div>
        </div>

        <div className="container1">
          <div className="row">
            <div className="col1">
              <span>{humidity}%</span>
              <h3>Humidity</h3>
            </div>
            <div className="col1">
              <span>{windspeed} Miles/Hr</span>
              <h3>Wind Speed</h3>
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <span>{rainrate} mm</span>
              <h3>Rain Rate</h3>
            </div>
            <div className="col1">
              <span>{uv}</span>
              <h3>UV Index</h3>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BoxData;