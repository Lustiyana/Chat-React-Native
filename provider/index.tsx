import React, {useReducer, ReactNode} from 'react';
import ChatContext from '../context/Chat';
import {initialState, reducer} from '../reducer/Chat';

interface ChatProviderProps {
  children: ReactNode;
}

const ChatProvider: React.FC<ChatProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <ChatContext.Provider value={{state, dispatch}}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatProvider;
