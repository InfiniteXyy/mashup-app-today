import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNumAction } from '../reducers/appReducer';
import Widget from './Widget';
import { Container } from 'react-bootstrap';

class Root extends Component {
  render() {
    return (
      <Container>
        <Widget type="weather" />
        {/* <Widget type="job" /> */}
      </Container>
    );
  }
}

const mapStateToProps = ({ appReducer }) => ({ num: appReducer.num });
const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(addNumAction())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Root);
