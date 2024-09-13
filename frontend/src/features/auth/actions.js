import {jwtDecode} from 'jwt-decode';
import AsyncStorage from '@react-native-community/async-storage';
import Toast from 'react-native-toast-message';

import {getUserById,} from '../../api';
import {TOAST_OFFSET} from '../../components/toast/constants';
import {SET_CURRENT_USER} from '../auth/action-types';

import {baseUrl} from '../../../assets/common/baseUrl';

export const loginUser = (user, dispatch) => {
  fetch(`${baseUrl}/users/login`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      if (data) {
        const token = data.token;
        AsyncStorage.setItem("jwt", token)
        const decoded = jwtDecode(token)
        dispatch(setCurrentUser(decoded, user))
        Toast.show({
          topOffset: TOAST_OFFSET,
          type: "success",
          text1: "Logged in!",
        });
      } else {
        logoutUser(dispatch)
      }
    })
    .catch((err) => {
      Toast.show({
        topOffset: TOAST_OFFSET,
        type: "error",
        text1: "Please provide correct credentials",
        text2: err.message
      });
      logoutUser(dispatch)
    });
};

export const getUserProfile = (id) => {
  getUserById(id)
    .then((res) => res.json())
    .then((data) => console.log(data))
}

export const logoutUser = (dispatch) => {
  AsyncStorage.removeItem('jwt');
  dispatch(setCurrentUser({}));
}

export const setCurrentUser = (decoded, user) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
    userProfile: user,
  };
}
