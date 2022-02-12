
const initialState = {
  localStorageData: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SOME_PERSIST_ACTION": {
      return {
        ...state,
        localStorageData: action.payload
      };
    }

    default:
      return state;
  }
};
