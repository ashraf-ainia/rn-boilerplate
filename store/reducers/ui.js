import * as actions from '../actions/ui';

const initialState = {
    loading: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SET_LOADING:
            return { ...state, loading: action.payload };
        default:
            return state;
    }
};
