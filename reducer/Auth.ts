import {AuthAction, AuthState} from '../context/Auth';
import {Auth} from '../interface/Friend';

const initialAuth: AuthState = {
  uid: '',
};

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'FETCH_DATA_LOGIN':
      return {...state, uid: action.payload};
    default:
      return state;
  }
};

export {initialAuth, authReducer};
