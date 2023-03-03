import { CLEAR_INPUT_VALUES, ON_CHANGE, SET_ON_CHANGE } from "./Constants";

export const OnChange = (name, value) => (dispatch) => {
  // if (name === "subject") {
  //   dispatch(StoreSubjectName(value));
  // }
  dispatch({
    type: ON_CHANGE,
    name: name,
    value: value,
  });
};
export const ClearInputValues = () => {
  return {
    type: CLEAR_INPUT_VALUES,
    payload: "",
  };
};

export const setOnChnage = (data) => {
  return {
    type: SET_ON_CHANGE,
    payload: data,
  };
};
