import '../App.css';
import logosvg from '../Images/Weather-SVG/02d.svg'
import { useState, useEffect } from 'react';
import axios from 'axios';

function BoxData() {
  const [tempin, setTempin] = useState(null);
  const [tempout, setTempout] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [windspeed, setWindspeed] = useState(null);
  const [rainrate, setRainrate] = useState(null);
  const [uv, setUv] = useState(null);
  const [error, setError] = useState(null);
    
  useEffect(() => {
    axios.get('http://192.168.29.79:8000/process/api')
      .then(response => {
        setTempin(response.data.tempin);
        setTempout(response.data.tempout);
        setHumidity(response.data.humidity);
        setWindspeed(response.data.windspeed);
        setRainrate(response.data.rainrate);
        setUv(response.data.uv);
        
      })
      .catch(error => {
        setError(error);
      });
  }, []);
  
    return(
      <div className="box">
        <p>{error}</p>
        <div className="box1">
          <div className='logo'>
            
            <img
              src={logosvg} alt="logo" className="image" />
            <h4>Scattered clouds</h4>
          </div>
          <div className="text">
            <h4>Inside Temperature</h4>
            <span>{tempin}°F</span>
          </div>
          <div className="text">
            <h4>Outside Temperature</h4>
            <span>{tempout}°F</span>
          </div>
        </div>

        <div className="container1">
          <div className="row">
            <div className="col1">
              <h3>Humidity</h3>
              <span>{humidity}%</span>
            </div>
            <div className="col1">
              <h3>Wind</h3>
              <span>{windspeed} Miles/Hr</span>
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <h3>Rain Rate</h3>
              <span>{rainrate} mm</span>
            </div>
            <div className="col1">
              <h3>UV Index</h3>
              <span>{uv}</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BoxData;