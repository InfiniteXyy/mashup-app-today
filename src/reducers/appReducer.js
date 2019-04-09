const ADD_NUM = 'ADD_NUM';

export function addNumAction() {
  return {
    type: ADD_NUM
  };
}

export default function(state = { num: 1 }, action) {
  switch (action.type) {
    case ADD_NUM:
      return { ...state, num: state.num + 1 };
    default:
      return state;
  }
}
