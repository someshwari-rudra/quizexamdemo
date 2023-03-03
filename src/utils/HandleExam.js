import { TEACHER } from "../redux/actions/Constants";
import { ClearInputValues, OnChange } from "../redux/actions/OnChange";
import { RemoveQuestion } from "../redux/actions/Teacher";

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

export const handleSaveChanges = (
  ONchnage,
  currentIndex,
  questionsAll,
  dispatch,
  reset,
  prevValueExists,
  setValue
) => {
  const questions = {
    question: ONchnage.question,
    options: [
      ONchnage.Option1,
      ONchnage.Option2,
      ONchnage.Option3,
      ONchnage.Option4,
    ],
    answer: ONchnage.answer,
  };
  const data = {
    question: ONchnage.question,
    option: ONchnage.option,
    Option1: ONchnage.Option1,
    Option2: ONchnage.Option2,
    Option3: ONchnage.Option3,
    Option4: ONchnage.Option4,
    answer: ONchnage.answer,
    notes: ONchnage.notes,
  };

  if (currentIndex >= 0 && currentIndex < questionsAll.length) {
    dispatch(RemoveQuestion(currentIndex, questions, data));
    dispatch({ type: TEACHER.SHOW_MODAL });
    reset();
    dispatch(ClearInputValues());
    handleNext(currentIndex, prevValueExists, setValue, dispatch);
  }
};

export const uploadQuestions = (data, AllNotes, dispatch) => {
  console.log('data :>> ', data);
  data?.map((item) => {
    const options = {};
    let option;
    item.options.forEach((optionItem, index) => {
      options[`Option${index + 1}`] = optionItem;
      if (item.answer === optionItem) {
        option = `Option${index + 1}`;
        return option;
      }
    });
    let notes;
    AllNotes.forEach((note) => {
      notes = note;
      return notes;
    });
    const AllQuestions = {
      ...item,
      ...options,
      option,
      notes,
    };
    console.log("AllQuestions :>> ", AllQuestions);
    dispatch({
      type: TEACHER.PREV_QUESTION,
      payload: { data: AllQuestions, curIndexLength: 0 },
    });
    dispatch({ type: TEACHER.PREV_LOADING, payload: true });
    return {
      ...item,
      ...options,
      option,
    };
  });
};
