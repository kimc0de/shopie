import {isEmpty} from 'lodash-es';
import {SET_CURRENT_USER} from './action-types';

export const authReducer = (state, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        userProfile: action.userProfile,
      };
    default:
      return state;
  }
}
