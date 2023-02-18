import { CLEAR_INPUT_VALUES, ON_CHANGE } from "../actions/Constants";

const initialState = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "",
  subject: "",
  question: "",
  option: "",
  Option1: "",
  Option2: "",
  Option3: "",
  Option4: "",
  answer: "",
  notes: "",
};
export const OnChangeReducer = (
  state = initialState,
  { type, name, value }
) => {
  switch (type) {
    case ON_CHANGE:
      return {
        ...state,
        [name]: value,
      };
    case CLEAR_INPUT_VALUES:
      return {
        ...initialState,
      };
    default:
      return state;
  }
};
