import React from 'react';

export default class WeatherList extends React.Component{
    render(){
        return(
            <div className="App-Content-Weather-Box">
                {
                    this.props.Data.length === 0 
                        ? <div className="App-Content-description">
                            *Enter City name and country code divided by comma<br />
                            *Use ISO 3166 country codes<br />
                            *E.g. <b>New York, US</b>
                          </div>
                        : <ul>
                            {
                                this.props.Data.map(({date, day, min, max, weather, image}) => 
                                    <li key={date}>
                                        <div>
                                            <div className="App-Content-Weather-Day">{day}</div>
                                            <div><img src={image} alt={weather} /></div>
                                            <div className="App-Content-Weather-Temp">
                                                <span>{min}&#176;F&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                                <span>{max}&#176;F</span>
                                            </div>
                                        </div>
                                    </li>
                                )
                            }
                          </ul>
                }
            </div>
        );
    }
}