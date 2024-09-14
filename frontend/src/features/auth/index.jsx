import {
  useEffect,
  useReducer,
  useState,
} from 'react';
import {jwtDecode} from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

import {authReducer} from './reducer';
import {setCurrentUser} from './actions';
import {AuthGlobal} from './global';

export const Auth = (props) => {
  const [stateUser, dispatch] = useReducer(authReducer, {
    isAuthenticated: null,
    user: {},
  });
  const [showChild, setShowChild] = useState(false);

  useEffect(() => {
    setShowChild(true);
    if (AsyncStorage.jwt) {
      const decoded = AsyncStorage.jwt ? jwtDecode(AsyncStorage.jwt) : "";
      if (setShowChild) {
        dispatch(setCurrentUser(decoded));
      }
    }
    return () => setShowChild(false);
  }, []);

  if (!showChild) {
    return null;
  }

  return (
    <AuthGlobal.Provider value={{stateUser, dispatch}}>
      {props.children}
    </AuthGlobal.Provider>
  );
}
