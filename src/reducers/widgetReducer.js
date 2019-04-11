import agent from '../agent';
const ON_LOAD = 'ON_LOAD';
const UPDATE_DATA = 'UPDATE_DATA';
const ADD_WIDGET = 'ADD_WIDGET';
const REMOVE_WIDGET = 'REMOVE_WIDGET';

export const allWidgets = ['weather', 'poem', 'music'];

const defaultState = {
  widgets: [],
  loading: [],
  data: {}
};

export function toggleWidget(title, visible) {
  return {
    type: visible ? ADD_WIDGET : REMOVE_WIDGET,
    title
  };
}

export function loadWidget(title, payload) {
  return async dispatch => {
    dispatch({
      type: ON_LOAD,
      title
    });
    const result = await agent[title].load(payload);
    dispatch({
      type: UPDATE_DATA,
      title,
      payload: result
    });
  };
}

export default function(state = defaultState, action) {
  switch (action.type) {
    case ON_LOAD:
      return { ...state, loading: [...state.loading, action.title] };
    case UPDATE_DATA:
      return {
        ...state,
        data: { ...state.data, [action.title]: action.payload },
        loading: state.loading.filter(i => i !== action.title)
      };
    case ADD_WIDGET:
      return {
        ...state,
        widgets: [...state.widgets, action.title]
      };
    case REMOVE_WIDGET:
      return {
        ...state,
        widgets: state.widgets.filter(i => i !== action.title)
      };
    default:
      return state;
  }
}
