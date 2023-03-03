import Api from "../../config/api";
import { STUDENT, TEACHER } from "./Constants";

export const getAllExamData = () => (dispatch) => {
  Api.get(`student/studentExam`)
    .then((response) => {
      console.log("response :>> ", response);
      dispatch({ type: STUDENT.ALL_EXAM_DATA, payload: response.data });
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

export const getSingleExam = (id) => (dispatch) => {
  Api.get(`student/examPaper?id=${id}`)
    .then((res) => {
      console.log("res :>> ", res);
      dispatch({ type: STUDENT.GIVE_EXAM, payload: res.data });
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

export const GiveExam = (id, data) => (dispatch) => {
  Api.post(`student/giveExam?id=${id}`, data)
    .then((res) => {
      console.log("res :>> ", res);
      dispatch({ type: STUDENT.RESPONSE, payload: res.message });
      dispatch({ type: TEACHER.LOADING });
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

export const GetStudentProfile = () => (dispatch) => {
  Api.get(`student/getStudentDetail`)
    .then((res) => {
      console.log("res :>> ", res);
      dispatch({ type: STUDENT.PROFILE, payload: res.data });
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

export const updateStudentProfile = (name) => (dispatch) => {
  Api.put(`student/studentProfile`, { name })
    .then((res) => {
      console.log("res :>> ", res);
      dispatch({ type: STUDENT.RESPONSE, payload: res.message });
      dispatch({ type: TEACHER.LOADING });
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};
