import Api from "../../config/api";
import { TEACHER } from "./Constants";

export const ViewStudentData = () => (dispatch) => {
  Api.get("/dashboard/Teachers").then((response) => {
    console.log("response :>> ", response);
    dispatch({ type: TEACHER.VIEW_STUDENT, payload: response.data });
  });
};

export const ViewsingleStudentData = (id) => (dispatch) => {
  console.log("id from action :>> ", id);
  Api.get(`/dashboard/Teachers/viewStudentDetail?id=${id}`)
    .then((response) => {
      console.log("response :>> ", response.data);
      dispatch({ type: TEACHER.VIEW_SINGLE_STUDENT, payload: response.data });
    })
    .catch((error) => console.log("error :>> ", error));
};

export const StoreExamQuestions = (data) => (dispatch) => {
  dispatch({ type: TEACHER.STORE_QUESTIONS, payload: data });
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
    payload: { index: index, que: que,data:data },
  };
};

export const ViewExamAction = () => (dispatch) => {
  Api.get("dashboard/Teachers/viewExam")
    .then((response) => {
      console.log("response :>> ", response);
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

export const clearAllOnsubmit = () => {
  return {
    type: TEACHER.CLEAR_ALL_ONSUBMIT,
  };
}
