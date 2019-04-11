import React, { Component } from 'react';
import { Navbar, Container, Nav, Modal, Form, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import 'react-toggle/style.css';
import './myNavbar.css';
import Toggle from 'react-toggle';
import { allWidgets, toggleWidget } from '../reducers/widgetReducer';
import { searchEngines, toggleSearchEngine } from '../reducers/appReducer';

const labels = {
  weather: '天气',
  poem: '每日诗词',
  music: '音乐榜单'
};
class MyNavbar extends Component {
  state = {
    settingOpen: false,
    componentListOpen: false
  };

  toggleSetting = (settingOpen = true) => () => {
    this.setState({ settingOpen });
  };

  toggleComponent = (componentListOpen = true) => () => {
    this.setState({ componentListOpen });
  };

  handleToggleWidget = widget => () => {
    let visible = this.props.widgets.indexOf(widget) !== -1;
    this.props.toggleWidget(widget, !visible);
  };

  toggleSelectEngine = event => {
    this.props.toggleSearchEngine(event.target.value);
  };

  render() {
    return (
      <Navbar bg="transparent">
        <Container>
          <Nav className="ml-auto">
            <Nav.Link onClick={this.toggleSetting()}>设置</Nav.Link>
            <Nav.Link onClick={this.toggleComponent()}>组件</Nav.Link>
          </Nav>
        </Container>
        <Modal show={this.state.settingOpen} onHide={this.toggleSetting(false)}>
          <Modal.Header closeButton>
            <Modal.Title>设置</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Form.Group as={Row}>
              <Form.Label column md="8" sm="8" xs="8">
                搜索引擎
              </Form.Label>
              <Col md="4" sm="4" xs="4">
                <Form.Control
                  value={this.props.searchEngine}
                  as="select"
                  onChange={this.toggleSelectEngine}
                >
                  {Object.keys(searchEngines).map((i, index) => (
                    <option value={i} key={i}>
                      {searchEngines[i].title}
                    </option>
                  ))}
                </Form.Control>
              </Col>
            </Form.Group>
          </Modal.Body>
        </Modal>
        <Modal
          show={this.state.componentListOpen}
          onHide={this.toggleComponent(false)}
        >
          <Modal.Header closeButton>
            <Modal.Title>组件</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {allWidgets.map((i, index) => (
              <div className="label" key={index}>
                <div>{labels[i]}</div>
                <Toggle
                  icons={false}
                  onChange={this.handleToggleWidget(i)}
                  checked={this.props.widgets.indexOf(i) !== -1}
                />
              </div>
            ))}
          </Modal.Body>
        </Modal>
      </Navbar>
    );
  }
}

const mapStateToProps = ({ widgetReducer, appReducer }) => ({
  widgets: widgetReducer.widgets,
  searchEngine: appReducer.searchEngine
});
const mapDispatchToProps = dispatch => ({
  toggleWidget: (title, visible) => dispatch(toggleWidget(title, visible)),
  toggleSearchEngine: title => dispatch(toggleSearchEngine(title))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyNavbar);
