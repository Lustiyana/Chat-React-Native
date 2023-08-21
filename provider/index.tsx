import React, {useReducer, ReactNode} from 'react';
import AuthContext from '../context/Auth';
import ChatContext from '../context/Chat';
import {authReducer, initialAuth} from '../reducer/Auth';
import {initialState, reducer} from '../reducer/Chat';

interface ChatProviderProps {
  children: ReactNode;
}

const ChatProvider: React.FC<ChatProviderProps> = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [authState, authDispatch] = useReducer(authReducer, initialAuth);
  return (
    <AuthContext.Provider value={{authState, authDispatch}}>
      <ChatContext.Provider value={{state, dispatch}}>
        {children}
      </ChatContext.Provider>
    </AuthContext.Provider>
  );
};

export default ChatProvider;
