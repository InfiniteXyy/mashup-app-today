import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { loadWeather, loadJob } from '../reducers/widgetReducer';

class Widget extends Component {
  state = {
    open: true
  };

  componentDidMount() {
    let { type } = this.props;
    if (type === 'weather') {
      this.props.loadWeather();
    }
    if (type === 'job') {
      this.props.loadJob();
    }
  }
  render() {
    let { data, type } = this.props;
    let content;
    switch (type) {
      case 'job':
        let { job } = data;
        content = job && (
          <li>
            <ul>title：{job[0].title}</ul>
            <ul>type：{job[0].content}</ul>
          </li>
        );
        break;
      case 'weather':
      default:
        let { weather } = data;
        content = weather && (
          <li>
            <ul>{weather.cityInfo.city}</ul>
            <ul>温度：{weather.data.wendu}°C</ul>
            <ul>湿度：{weather.data.shidu}</ul>
            <ul>PM2.5：{weather.data.pm25}°C</ul>
            <ul>PM10：{weather.data.pm10}°C</ul>
            <ul>建议：{weather.data.ganmao}</ul>
          </li>
        );
        break;
    }
    return (
      <Card style={{ width: 300 }}>
        <Card.Title>{this.props.type}</Card.Title>
        <Card.Body>{content}</Card.Body>
      </Card>
    );
  }
}

const mapStateToProps = ({ widgetReducer }) => ({
  data: widgetReducer.data
});

const mapDispatchToProps = dispatch => ({
  loadWeather: cityId => dispatch(loadWeather(cityId)),
  loadJob: () => dispatch(loadJob())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget);
