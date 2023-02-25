import React, { useState } from "react";
import { UserData } from "../Data";
import '../App.css';
import { Line } from "react-chartjs-2";
import ChartDataLabels from 'chartjs-plugin-datalabels';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Button } from "@mui/material";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);
ChartJS.register(ChartDataLabels);
export const options = {
  responsive: true,
  tooltips: {
    mode: 'index',
    intersect: false
 },
 hover: {
    mode: 'index',
    intersect: false
 },
  elements: {
    line: {
      tension: 0.3,
    }
  },
  scales: {
    x: {
      grid: {
        display: false
      }
    },
    y: {
      suggestedMin: 27,
      suggestedMax: 35,
      grid: {
        display: false
      },
      border:{
        display: false,
      },
      ticks: {
        display: false
      }
    }
  },
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
    },
    datalabels: {
      anchor: 'end',
      align: 'top',
      formatter: Math.round,
      font: {
          weight: 'bold'
      }
  }
  },
};

function LineCharts() {
  const [selectedComponent, setSelectedComponent] = useState('temperature');

  const handleButtonClick = (component) => {
    setSelectedComponent(component);
  };
  // eslint-disable-next-line
  const [userData1, setUserData] = useState({
    labels: UserData.map((data) => data.day),
    datasets: [
      {
        fill: 'start',
        label: "Year",
        data: UserData.map((data) => data.temperature),
        backgroundColor: [
          "rgba(75,192,192,0.7)"
        ],
        borderColor: 'rgb(53, 162, 235)',
        borderWidth: 1
      },
    ],
  });
  const [userData2] = useState({
    labels: UserData.map((data) => data.day),
    datasets: [
      {
        fill: 'start',
        label: "Year",
        data: UserData.map((data) => data.humidity),
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      },
    ],
  });
  const [userData3] = useState({
    labels: UserData.map((data) => data.day),
    datasets: [
      {
        fill: 'start',
        label: "Year",
        data: UserData.map((data) => data.windSpeed),
        backgroundColor: "rgba(144, 238, 144, 0.8)",
        borderColor: 'rgb(0, 128, 0)',
        borderWidth: 1
      },
    ],
  });
  return (
    <>
    <div className="button-group-graph">
      <div className="button-group">
        <Button variant='contained' color="secondary" className="button" onClick={() => handleButtonClick('temperature')}>Temperature</Button>
        <Button variant='contained' color="secondary" className="button" onClick={() => handleButtonClick('humidity')}>Humidity</Button>
        <Button variant='contained' color="secondary" className="button" onClick={() => handleButtonClick('barometer')}>Barometer</Button> 
        {/* <button className="button" onClick={() => handleButtonClick('temperature')}>Temperature</button>
        <button className="button" onClick={() => handleButtonClick('humidity')}>Humidity</button>
        <button className="button" onClick={() => handleButtonClick('barometer')}>Barometer</button> */}
      </div>
      <div className="button-graph">
        {selectedComponent === 'temperature' && <Line options={options} data={userData1} />}
        {selectedComponent === 'humidity' && <Line options={options} data={userData2} />}
        {selectedComponent === 'barometer' && <Line options={options} data={userData3} />}
      </div>
    </div>
    {/* <div className="charts-container">
      <div className="chart-item">
        <h2>Temperature</h2>
        <Line options={options} data={userData1} />
      </div>
      <div className="chart-item">
        <h2>Humidity</h2>
        <Line options={options} data={userData2} />
      </div>
      <div className="chart-item">
        <h2>Wind Speed</h2>
        <Line options={options} data={userData3} />
      </div>
      
    </div> */}
    </>
  );
}

export default LineCharts;