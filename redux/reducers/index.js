import { combineReducers } from 'redux'
import { HELLO_WORLD } from './../actions'

const defaultState = { message: 'Hello' };
const { assign } = Object;

const helloWorld = (state=defaultState, action) => {
  const { type } = action;

  switch (type) {
    case HELLO_WORLD:
      return assign({}, state, { message: 'Hello World' });
      break;
    default:
      console.log('default reducer');
      return state;
  }
};

const helloWorldReducer = combineReducers({ helloWorld });

export default helloWorldReducer;
