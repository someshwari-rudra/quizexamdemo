import { AUTH } from "../actions/Constants";

const initialState = {
  loading: false,
  isDataLoaded: false,
  userDetails: undefined,
  response: "",
};
export const AuthReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH.LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case AUTH.LOAD_DATA:
      return {
        ...state,
        isDataLoaded: payload,
      };
    case AUTH.USER_DETAILS:
      return {
        ...state,
        userDetails: payload,
      };
    case AUTH.RESPONSE:
      return {
        ...state,
        response: payload,
      };
    default:
      return state;
  }
};
