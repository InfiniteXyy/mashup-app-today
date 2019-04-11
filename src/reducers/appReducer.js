const SELECT_SEARCH_ENGINE = 'SELECT_SEARCH_ENGINE';

export function selectSearchEngine(title) {
  return {
    type: SELECT_SEARCH_ENGINE,
    title
  };
}

export const searchEngines = {
  baidu: {
    title: '百度',
    url: 'https://www.baidu.com/s?wd='
  },
  google: {
    title: '谷歌',
    url: 'https://www.google.com/search?q=123'
  }
};

export function toggleSearchEngine(title) {
  return {
    type: SELECT_SEARCH_ENGINE,
    title
  };
}

const defaultState = {
  searchEngine: 'baidu'
};

export default function(state = defaultState, action) {
  switch (action.type) {
    case SELECT_SEARCH_ENGINE:
      return { ...state, searchEngine: action.title };
    default:
      return state;
  }
}
