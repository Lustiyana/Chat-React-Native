import {SearchState, Action} from '../context/Chat';

const initialState: SearchState = {
  count: 0,
  keyword: '',
  result: '',
  openSearch: false,
};

const reducer = (state: SearchState, action: Action): SearchState => {
  switch (action.type) {
    case 'INSERT_KEYWORD':
      return {...state, keyword: action.payload};
    case 'SET_OPEN_SEARCH':
      return {...state, openSearch: action.payload};
    default:
      return state;
  }
};

export {initialState, reducer};
