import React, { Component } from 'react';
import { connect } from 'react-redux';
import Widget from './Widget';
import {
  Container,
  InputGroup,
  FormControl,
  Row,
  Col,
  Image
} from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import './root.css';
import moment from 'moment';
import { searchEngines } from '../reducers/appReducer';
import baiduIcon from './icons/baidu.svg';
import googleIcon from './icons/google.svg';

const Icon = {
  baidu: baiduIcon,
  google: googleIcon
};
class Root extends Component {
  state = {
    text: '',
    focus: false
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  toggleFocus = focus => () => {
    this.setState({ focus });
  };

  handleSearch = () => {
    if (this.state.text !== '')
      window.location.href = this.props.searchEngineUrl + this.state.text;
  };

  keyPress = event => {
    if (event.keyCode === 13) {
      this.handleSearch();
    }
  };

  render() {
    return (
      <div>
        <MyNavbar />
        <Container>
          <Row style={{ marginTop: '10%' }} className="text-center">
            <Col md={{ span: 8, offset: 2 }}>
              <p style={{ color: '#9b9b9b', fontSize: 32, marginBottom: 4 }}>
                TODAY
              </p>
              <p style={{ color: '#4a4a4a', fontSize: 60 }}>
                {moment().format('M月D日')}
              </p>
            </Col>
          </Row>
          <Row style={{ marginTop: '5%' }}>
            <Col lg={{ span: 8, offset: 2 }}>
              <div
                className={`input-wrapper ${this.state.focus &&
                  'input-wrapper-shadow'}`}
              >
                <InputGroup>
                  <FormControl
                    onKeyDown={this.keyPress}
                    onFocus={this.toggleFocus(true)}
                    onBlur={this.toggleFocus(false)}
                    placeholder="输入文本"
                    onChange={this.handleChange}
                    value={this.state.text}
                  />
                  <InputGroup.Append onClick={this.handleSearch}>
                    <img
                      height={22}
                      width={22}
                      src={Icon[this.props.searchEngine]}
                    />
                  </InputGroup.Append>
                </InputGroup>
              </div>
            </Col>
          </Row>
          <Row style={{ marginBottom: 100 }}>
            <Col lg={{ span: 8, offset: 2 }}>
              {this.props.widgets.map((i, index) => (
                <Widget type={i} key={index} />
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = ({ widgetReducer, appReducer }) => ({
  widgets: widgetReducer.widgets,
  searchEngineUrl: searchEngines[appReducer.searchEngine].url,
  searchEngine: appReducer.searchEngine
});

export default connect(mapStateToProps)(Root);
