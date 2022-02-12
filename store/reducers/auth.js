import * as actions from '../actions/auth';

const initialState = {
  token: null,
  userInfo: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_TOKEN:
      return {...state, token: action.payload.token};
    case actions.SET_USER_INFO:
      return {...state, userInfo: action.payload};
    default:
      return state;
  }
};
