import { combineReducers } from 'redux';
import appReducer from './appReducer'
import widgetReducer from './widgetReducer'

export default combineReducers({
  appReducer,
  widgetReducer
});
