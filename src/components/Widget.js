import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card } from 'react-bootstrap';
import { loadWidget } from '../reducers/widgetReducer';
import './widget.css';
import Loading from './Loading';
import Weather from './widgets/Weather';
import Poem from './widgets/Poem';
import Music from './widgets/Music';
class Widget extends Component {
  state = {
    open: true
  };

  componentDidMount() {
    let { type } = this.props;
    this.props.loadWidget(type);
  }
  render() {
    let { data, type, loading } = this.props;
    let content;
    switch (type) {
      case 'poem':
        let { poem } = data;
        content = poem && <Poem poem={poem} />;
        break;
      case 'music':
        let { music } = data;
        content = music && <Music music={music} />;
        break;
      case 'weather':
        let { weather } = data;
        content = weather && <Weather weather={weather} />;
        break;
      default:
        content = <div />;
        break;
    }
    return (
      <Card style={{ marginTop: 20, minWidth: 300 }}>
        {loading.indexOf(type) !== -1 ? (
          <Loading />
        ) : (
          <Card.Body>{content}</Card.Body>
        )}
      </Card>
    );
  }
}

const mapStateToProps = ({ widgetReducer }) => ({
  data: widgetReducer.data,
  loading: widgetReducer.loading
});

const mapDispatchToProps = dispatch => ({
  loadWidget: (title, payload) => dispatch(loadWidget(title, payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Widget);
