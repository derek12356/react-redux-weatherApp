import React, {Component} from 'react';
import {connect} from 'react-redux';

import Chart from '../components/chart';
import GoogleMap from '../components/google_map';
class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map(temp=>temp.main.temp)
    const pres = cityData.list.map(temp=>temp.main.pressure)
    const humi = cityData.list.map(temp=>temp.main.humidity)
    const { lon,lat } = cityData.city.coord;
  
    return (

      <tr key={name}>
          <td><GoogleMap lon={lon} lat={lat}/></td>
          <td><Chart data={temps} color = 'orange' units='K'/></td>
          <td><Chart data={pres} color= 'blue' units='hPa'/></td>
          <td><Chart data={humi} color='green' units='%'/></td>
      </tr>
      );
  }

  render() {

    return (

      <table class="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature(K)</th>
            <th>Pressure(hPa)</th>
            <th>Humidity(%)</th>
          </tr>
        </thead>

        <tbody>
            {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);