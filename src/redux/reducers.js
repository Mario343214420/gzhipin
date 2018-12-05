/**
 * Created by Administrator on 2018/12/3.
 */
import {combineReducers} from 'redux';
import {AUTH_SUCCESS, AUTH_ERROR} from './action-types';
const initXState = 0;
const initUserState = {
  username: '',
  type: '',
  _id: '',
  errMsg: '',
  redirectTo: ''
};
function user(previousState = initUserState, action) {
  switch (action.type) {
    case AUTH_SUCCESS :
      return {...action.data, redirectTo: getRedirectPath(action.data.type, action.data.header)};
    case AUTH_ERROR :
      return {...initUserState, ...action.data};
    default :
      return previousState;
  }
}


const initYState = {};
function y(previousState = initYState, action) {
  switch (action.type) {
    default:
      return previousState;
  }
}

function getRedirectPath(type, header) {
  let path = '';
  
  if (type === 'laoban') {
    path = '/laoban';
  } else {
    path = '/dashen';
  }
  
  if (!header) {
    path += 'info';
  }
  
  return path;
}
export default combineReducers({
  user
})