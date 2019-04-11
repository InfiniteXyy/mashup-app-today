import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import './weather.css';

class Weather extends Component {
  render() {
    let { weather } = this.props;
    return (
      <React.Fragment>
        <div className="left">
          <Card.Title>天气</Card.Title>
          <div className="weather-header">
            <Card.Subtitle>{weather.data.wendu}°C</Card.Subtitle>
            <div className="city-info">{weather.cityInfo.city}</div>
          </div>
        </div>
        <div className="right">
          <div className="tip-container">
            <h4>湿度</h4>
            <p>{weather.data.shidu}</p>
          </div>
          <div className="tip-container">
            <h4>空气质量</h4>
            <p>{weather.data.quality}</p>
          </div>
          <div className="tip-container">
            <h4>建议</h4>
            <p>{weather.data.ganmao}</p>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Weather;
