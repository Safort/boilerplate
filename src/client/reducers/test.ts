import * as actions from '../actions/test';

const initialState = {
  isFetching: false,
};

export default function test(state = initialState, action) {
  switch (action.type) {
    case actions.GET_TEST_REQUEST:
      return { ...state, isFetching: true };

    case actions.GET_TEST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        errors: [],
        current: action.current,
      };

    case actions.GET_TEST_FAIL:
      return {
        ...state,
        isFetching: false,
        errors: action.errors,
      };

    default:
      return state;
  }
}
