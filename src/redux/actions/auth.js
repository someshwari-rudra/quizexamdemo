import Api from "../../config/api";
import { AUTH, SIGN_UP } from "./Constants";

export const userLogin = (data) => (dispatch) => {
  let flag = false
  dispatch({ type: AUTH.LOADING });
  Api.post(`/users/Login`, data)
    .then((response) => {
      console.log('response :>> ', response);
      if (response) {
        flag = true
      }
      console.log('flag :>> ', flag);
      if (flag === true) {
        console.log("runners :>> ", "runners");
        dispatch({ type: AUTH.LOADING });
      }
      dispatch({ type: AUTH.USER_DETAILS, payload: response.message });
      localStorage.setItem("token", JSON.stringify(response.data.token));
      localStorage.setItem("userType", JSON.stringify(response.data.role));
      localStorage.setItem("userName", JSON.stringify(response.data.name));
      
    })
    .catch((error) => console.log("error :>> ", error));
};

export const UserSignUp = (data) => (dispatch) => {
  let flag = false;
   dispatch({ type: SIGN_UP.LOADING_SIGN_UP });
  Api.post(`/users/SignUp`, data).then((response) => {
    console.log("response :>> ", response.message);
    if (response) {
      flag = true;
    }
     if (flag === true) {
       console.log("runners :>> ", "runners");
          dispatch({ type: SIGN_UP.LOADING_SIGN_UP });
     }
    dispatch({ type: SIGN_UP.USER_DETAILS_SIGN_UP, payload: response.message });
  });
};
