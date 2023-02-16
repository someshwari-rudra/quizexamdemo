import { SIGN_UP } from "../actions/Constants";

const initialState = {
  loading: false,
  isDataLoaded: false,
  userDetails: undefined,
};
export const SignUpReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_UP.LOADING_SIGN_UP:
      return {
        ...state,
        loading: !state.loading,
      };
    case SIGN_UP.LOAD_DATA_SIGN_UP:
      return {
        ...state,
        isDataLoaded: payload,
      };
    case SIGN_UP.USER_DETAILS_SIGN_UP:
      return {
        ...state,
        userDetails: payload,
      };
    default:
      return state;
  }
};
