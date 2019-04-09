import { weather, job } from '../agent';
const ON_LOAD = 'ON_LOAD';
const UPDATE_DATA = 'UPDATE_DATA';
const defaultState = {
  widgets: [],
  loading: [],
  data: {}
};

export function loadWeather(cityId) {
  return async dispatch => {
    dispatch({
      type: ON_LOAD,
      title: 'weather'
    });
    const result = await weather.load();
    dispatch({
      type: UPDATE_DATA,
      title: 'weather',
      payload: result
    });
  };
}

export function loadJob(description, location) {
  return async dispatch => {
    dispatch({
      type: ON_LOAD,
      title: 'job'
    });
    const result = await job.load('javascript', 'new+york');
    dispatch({
      type: UPDATE_DATA,
      title: 'job',
      payload: result
    });
  };
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case ON_LOAD:
      return { ...state, loading: [...state.loading] };
    case UPDATE_DATA:
      return {
        ...state,
        data: { ...state.data, [action.title]: action.payload },
        loading: state.loading.filter(i => i !== action.title)
      };
    default:
      return state;
  }
}
