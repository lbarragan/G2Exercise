import React from 'react';

export default class SearchWeather extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            city: '',
            isValid: props.isValid,
            errorMsg: props.errorMsg
        }

        this.handleCityChange = this.handleCityChange.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
    }

    setError(message){
        this.setState({
            errorMsg: message.charAt(0).toUpperCase() + message.slice(1).toLowerCase()
        });
    }

    handleCityChange(event){
        let regex = /^([a-zA-Z ])+\s*(,)\s*([a-zA-Z]{2})$/;
        let validationMsg = '';
        let isValid = true;
        if(!regex.test(event.target.value)){
            validationMsg = 'Invalid City format';
            isValid = false;
        }
        this.setState({ city: event.target.value, isValid:isValid, errorMsg: validationMsg });
    }

    handleSearch(event){
        if(this.state.city.trim() === ""){
            this.setState({
                errorMsg: 'City cannot be empty',
                isValid: false
            })
        }else{
            this.props.ValidateCity(event, this.state.city);
        }
    }

    render(){
        return (
            <div>
                <form>
                    <p>
                       <input type="text" name="city" value={this.state.name} onChange={this.handleCityChange} className={this.state.isValid ? "App-Content-input" : "App-Content-input-invalid"} placeholder="City name, Country code" />&nbsp;&nbsp;&nbsp;&nbsp;
                       <input type="button" value="Take a look!" onClick={this.handleSearch} disabled={!this.state.isValid} />
                    </p>
                    <span className="App-Content-errorMsg">{this.state.errorMsg}</span>
                </form>
            </div>
        )
    }
}