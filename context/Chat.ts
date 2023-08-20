import React, {createContext, Dispatch} from 'react';

export interface SearchState {
  keyword: string;
  result: string;
  openSearch: boolean;
  count: number;
}

export type Action =
  | {
      type: 'INSERT_KEYWORD';
      payload: string;
    }
  | {
      type: 'FETCH_RESULT';
    }
  | {
      type: 'SET_OPEN_SEARCH';
      payload: boolean;
    };

const ChatContext = createContext<
  {state: SearchState; dispatch: Dispatch<Action>} | undefined
>(undefined);
export default ChatContext;
