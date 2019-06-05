import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-16'
import { shallow, configure, mount } from "enzyme";
import { WeatherForecastContainer } from './Component/WeatherForecastContainer';
import SearchWeather from './Component/SearchWeather';
import WeatherList from './Component/WeatherList';

configure({ adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe("G2 Weather Forecast Exercise", ()=> {
  let props;
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let d = new Date(); 
    
  beforeEach(() => {
    props = {
      data: [{
        "date": d.getUTCDate(),
        "day": days[d.getDay()],
        "min": "60",
        "max": "70",
        "weather": "Clear",
        "image": "http://openweathermap.org/img/w/01d.png"
      }],
      isValid: true,
      errorMsg: ''
    };
  });

  it("should render correctly with no props", ()=>{
    const wrapper = shallow(<WeatherForecastContainer />);
    expect(wrapper).toMatchSnapshot();
  });

  it("Always renders a 'SearchWeather'", () =>{
    const wrapper = mount(<WeatherForecastContainer {...props} />);
    expect(wrapper.children().first(SearchWeather).length).toBe(1);
  });

  it("'SearchWeather' receive one prop", () =>{
    const wrapper = mount(<WeatherForecastContainer {...props} />);
    const swWrapper = wrapper.children().first(SearchWeather);
    expect(Object.keys(swWrapper.props()).length).toBe(1);
  });

  it("Always renders a 'WeatherList'", () =>{
    const wrapper = mount(<WeatherForecastContainer {...props}/>);
    expect(wrapper.children().contains(WeatherList)).toBe(true);
  });

  it("'WeatherList' receive one prop", () =>{
    const wrapper = mount(<WeatherForecastContainer {...props} />);
    const listWrapper = wrapper.children().first(WeatherList);
    expect(Object.keys(listWrapper.props()).length).toBe(1);
  });

});