import '../App.css';
import logosvg from '../Images/Weather-SVG/02d.svg'
import { useState, useEffect } from 'react';
import axios from 'axios';

function BoxData() {
  const [tempin, setTempin] = useState(null);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    axios.get('http://192.168.29.79:8000/process/api')
      .then(response => {
        setTempin(response.data.tempin);
        
      })
      .catch(error => {
        setError(error);
      });
  }, []);

    return(
      <div className="box">
        {/* <div className="box-data">
          <img src={logosvg} width={200} alt='logo'/>
          <div className='box-element'>
            <h4>Inside Temperature</h4>
            <span>17°C</span>
          </div>
          <div className='box-element'>
            <h4>Outside Temperature</h4>
            <span>28°C</span>
          </div>
        </div>
        <div className="box-data">
          <img src={logosvg} width={200} alt='logo'/>
          <div className='box-element'>
            <h4>Inside Temperature</h4>
            <span>17°C</span>
          </div>
          <div className='box-element'>
            <h4>Outside Temperature</h4>
            <span>28°C</span>
          </div>
        </div> */}

        <div className="box1">
          <div className='logo'>
            <img
              src={logosvg} alt="logo" className="image" />
            <h4>Scattered clouds</h4>
          </div>
          <div className="text">
            <h4>Inside Temperature</h4>
            <span>{tempin}°C</span>
          </div>
          <div className="text">
            <h4>Outside Temperature</h4>
            <span>28°C</span>
          </div>
        </div>

        <div className="container1">
          <div className="row">
            <div className="col1">
              <h3>Humidity</h3>
              <span>62%</span>
            </div>
            <div className="col1">
              <h3>Wind</h3>
              <span>0.2 Miles/Hr</span>
            </div>
          </div>
          <div className="row">
            <div className="col1">
              <h3>Rain Rate</h3>
              <span>0.00 mm</span>
            </div>
            <div className="col1">
              <h3>UV Index</h3>
              <span>3</span>
            </div>
          </div>
        </div>
      </div>
    );
}

export default BoxData;