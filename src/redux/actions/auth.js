import Api from "../../config/api";
import { AUTH, SIGN_UP } from "./Constants";

export const userLogin = (data) => (dispatch) => {
  dispatch({ type: AUTH.LOADING });
  Api.post(`/users/Login`, data)
    .then((response) => {
      dispatch({ type: AUTH.USER_DETAILS, payload: response.message });
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("userType", JSON.stringify(response.data.role));
    })
    .catch((error) => console.log("error :>> ", error));
};

export const UserSignUp = (data) => (dispatch) => {
  dispatch({ type: SIGN_UP.LOADING });
    Api.post(`/users/SignUp`, data).then((response) => {
      console.log("response :>> ", response.message);
    dispatch({ type: SIGN_UP.USER_DETAILS, payload: response.message });
  });
};
