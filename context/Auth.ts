import React, {createContext, Dispatch} from 'react';

export interface AuthState {
  uid: string;
}

export type AuthAction = {
  type: 'FETCH_DATA_LOGIN';
  payload: string;
};

const AuthContext = createContext<
  {authState: AuthState; authDispatch: Dispatch<AuthAction>} | undefined
>(undefined);

export default AuthContext;
