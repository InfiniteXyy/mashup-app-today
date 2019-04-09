import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';

import Root from './components/Root';

const store = createStore(reducer, applyMiddleware(thunk));
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
