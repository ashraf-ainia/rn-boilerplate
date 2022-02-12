import * as actions from '../actions/notifications';

const initialState = {
  toast: {
    showToast: false,
    toastConfig: {
      type: 'success',
      text1: null,
      text2: null,
    },
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_SHOW_TOAST: {
      return {
        ...state,
        toast: {
          showToast: action.payload.showToast,
          toastConfig: {
            ...state.toast.toastConfig,
            ...action.payload.toastConfig,
          },
        },
      };
    }
    default:
      return state;
  }
};
