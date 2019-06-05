import React from 'react';
import SearchWeather from './SearchWeather';
import WeatherList from './WeatherList';

export class WeatherForecastContainer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            isValid: true,
            errorMsg: ' '
        }

        this.ValidateCity = this.ValidateCity.bind(this);
        this.searchWeather = React.createRef();
    }

    ValidateCity(event, city){
        event.preventDefault();
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=' + city + '&APPID=afbca948c1936057aede841310422cd9&units=imperial', {method: 'GET'})
        .then((response) => {
            if(response.headers.get("content-type").indexOf("application/json") !== -1){
                return response.json();
            }
        }).then((responseJson) => {
            if(responseJson.cod === "200"){
                let weathers = [];
                let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
                for(let i=0; i < responseJson.list.length; i++){
                    let currentTime = new Date();
                    while(currentTime.getHours() % 3 !== 0){
                        currentTime.setHours(currentTime.getHours() - 1);
                    }
                    let d = new Date(responseJson.list[i].dt_txt);
                    if(currentTime.getHours() === d.getHours()){
                        let weather = {
                            "date": responseJson.list[i].dt,
                            "day": days[d.getDay()],
                            "min": responseJson.list[i].main.temp_min,
                            "max": responseJson.list[i].main.temp_max,
                            "weather": responseJson.list[i].weather[0].main,
                            "image": "http://openweathermap.org/img/w/" + responseJson.list[i].weather[0].icon + ".png"
                        }
                        
                        weathers.push(weather);
                    }
                }
                this.setState({
                    data: weathers,
                    isValid: true,
                    errorMsg: ''
                }); 
            }else{
                this.searchWeather.current.setError(responseJson.message);
            }
        })
        .catch(error => console.log(error));
    }

    render(){
        return(
            <div>
                <SearchWeather ref={this.searchWeather} ValidateCity={this.ValidateCity} isValid={this.state.isValid} errorMsg={this.state.errorMsg} />
                <WeatherList Data={this.state.data} />
            </div>
        )
    }
}