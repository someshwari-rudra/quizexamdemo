import { CLEAR_INPUT_VALUES, ON_CHANGE } from "./Constants";

export const OnChange = (name, value) => {
  return {
    type: ON_CHANGE,
    name: name,
    value: value,
  };
};
export const ClearInputValues = () => {
    return {
        type: CLEAR_INPUT_VALUES,
        payload:""
    }
}
