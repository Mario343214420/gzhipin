/**
 * Created by Administrator on 2018/12/3.
 */
import {combineReducers} from 'redux';

const initXState = 0;

function x(previousState = initXState, action) {
  switch (action.type) {
    default:
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
export default combineReducers({
  x, y
})