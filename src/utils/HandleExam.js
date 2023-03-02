import { TEACHER } from "../redux/actions/Constants";
import { OnChange } from "../redux/actions/OnChange";

export const handleNext = (
  currentIndex,
  prevValueExists,
  setValue,
  dispatch
) => {
  dispatch({
    type: TEACHER.SET_CURRENT_INDEX,
    payload: currentIndex + 1,
  });
  if (currentIndex >= 0) {
    for (let prop in prevValueExists[currentIndex + 1]) {
      if (prevValueExists[currentIndex + 1].hasOwnProperty(prop)) {
        setValue(prop, prevValueExists[currentIndex + 1][prop]);
        dispatch(OnChange(prop, prevValueExists[currentIndex + 1][prop]));
      }
    }
    dispatch({ type: TEACHER.PREV_LOADING, payload: true });
  }
};

export const handlePrevious = (
  currentIndex,
  prevValueExists,
  setValue,
  dispatch,
  clearErrors
) => {
  clearErrors();
  dispatch({ type: TEACHER.PREV_LOADING, payload: true });
  if (currentIndex > 0) {
    dispatch({
      type: TEACHER.SET_CURRENT_INDEX,
      payload: currentIndex - 1,
    });
  }
  for (let prop in prevValueExists[currentIndex - 1]) {
    if (prevValueExists[currentIndex - 1].hasOwnProperty(prop)) {
      dispatch(OnChange(prop, prevValueExists[currentIndex - 1][prop]));
      setValue(prop, prevValueExists[currentIndex - 1][prop]);
    }
  }
};
