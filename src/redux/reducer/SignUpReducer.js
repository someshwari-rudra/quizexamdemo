import { SIGN_UP } from "../actions/Constants";

const initialState = {
  loading: false,
  isDataLoaded: false,
  userDetails: undefined,
};
export const SignUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP.LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case SIGN_UP.LOAD_DATA:
      return {
        ...state,
        isDataLoaded: payload,
      };
    case SIGN_UP.USER_DETAILS:
      return {
        ...state,
        userDetails: payload,
      };
    default:
      return state;
  }
};
