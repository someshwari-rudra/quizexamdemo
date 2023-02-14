import { AUTH } from "../actions/Constants";

const initialState = {
  loading: false,
  isDataLoaded: false,
  userDetails: undefined,
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
    default:
      return state;
  }
};
