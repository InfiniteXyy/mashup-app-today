import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './weather.css';

class Weather extends Component {
  render() {
    let { weather } = this.props;
    let data = weather.data;
    let forecast = data.forecast[0];
    return (
      <React.Fragment>
        <div className="left">
          <Card.Title>天气</Card.Title>
          <div className="weather-header">
            <Card.Subtitle>{data.wendu}°C</Card.Subtitle>
            <div className="city-info">{data.city}</div>
          </div>
        </div>
        <div className="right">
          <div className="tip-container">
            <h4>明日最高温度</h4>
            <p>{forecast.high}</p>
          </div>
          <div className="tip-container">
            <h4>明日最低温度</h4>
            <p>{forecast.low}</p>
          </div>
          <div className="tip-container">
            <h4>明日天气</h4>
            <p>{forecast.type}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Weather;
