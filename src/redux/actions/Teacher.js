import Api from "../../config/api";
import { TEACHER } from "./Constants";

export const ViewStudentData = () => (dispatch) => {
  Api.get("/dashboard/Teachers").then((response) => {
    console.log("response :>> ", response);
    dispatch({ type: TEACHER.VIEW_STUDENT, payload: response.data });
  });
};

export const ViewsingleStudentData = (id) => (dispatch) => {
  Api.get(`/dashboard/Teachers/viewStudentDetail?id=${id}`)
    .then((response) => {
      console.log("response :>> ", response.data);
      dispatch({ type: TEACHER.VIEW_SINGLE_STUDENT, payload: response.data });
    })
    .catch((error) => console.log("error :>> ", error));
};

export const StoreExamQuestions = (data) => (dispatch) => {
  const questions = { ...data };
  console.log("data-createExam :>> ", data);
  const { subject, question, answer, option, notes, ...restOptions } =
    questions;
  let options = [];
  options.push(...Object.values(restOptions));
  delete questions.Option1;
  delete questions.Option2;
  delete questions.Option3;
  delete questions.Option4;
  delete questions.option;
  questions.options = options;
  dispatch({ type: TEACHER.STORE_QUESTIONS, payload: questions });
};

export const PostExamQuestions = (data) => (dispatch) => {
  console.log("called :>> ", "called");
  Api.post(`/dashboard/Teachers/Exam`, data)
    .then((response) => {
      console.log("response from postExam :>> ", response);
      dispatch({ type: TEACHER.TEACHER_RESPONSE, payload: response.message });
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

export const RemoveQuestion = (index, que, data) => {
  return {
    type: TEACHER.REMOVE_QUESTION,
    payload: { index: index, que: que, data: data },
  };
};

export const ViewExamAction = () => (dispatch) => {
  Api.get("dashboard/Teachers/viewExam")
    .then((response) => {
      console.log("response :>> ", response);
      dispatch({ type: TEACHER.VIEW_EXAM, payload: response.data });
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

export const clearAllOnsubmit = () => {
  return {
    type: TEACHER.CLEAR_ALL_ONSUBMIT,
  };
};

export const saveOnChange = (bool) => {
  return {
    type: TEACHER.SAVE_ONCHANGE,
    payload: bool,
  };
};
