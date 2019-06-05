import React from 'react';
import './App.css';
import { WeatherForecastContainer } from './Component/WeatherForecastContainer';

function App() {
  return (
    <div className="App">
      <div className="App-Content shadowEffect">
        <h1>G2 Weather Forecast</h1>
        <WeatherForecastContainer />
      </div>
    </div>
  );
}

export default App;
