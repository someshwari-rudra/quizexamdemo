import { type } from "@testing-library/user-event/dist/type";
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
  dispatch({
    type: TEACHER.STORE_QUESTIONS,
    payload: data,
  });
};
export const StoreSubjectName = (data) => (dispatch) => {
  dispatch({ type: TEACHER.SUBJECT_NAME, payload: data });
};
export const StoreNotes = (data) => (dispatch) => {
  dispatch({ type: TEACHER.STORE_NOTES, payload: data });
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
      dispatch({ type: TEACHER.VIEW_ALL_EXAM, payload: response.data });
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

export const ViewSingleExamAction = (id) => (dispatch) => {
  Api.get(`dashboard/Teachers/examDetail?id=${id}`)
    .then((res) => {
      console.log("res :>> ", res);
      dispatch({ type: TEACHER.VIEW_SINGLE_EXAM, payload: res.data.questions });
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

export const editExamPutEreviousValues = (data) => {
  console.log("data :>> ", data);
  const updatedData = data?.map((item) => {
    const options = {};
    item.options.forEach((option, index) => {
      options[`Option${index + 1}`] = option;
    });
    return {
      ...item,
      ...options,
    };
  });
  console.log("updatedData :>> ", updatedData);
  return {
    type: TEACHER.POST_PREVIOUS_VALUES,
    payload: {
      data: data,
      prevValues: updatedData,
    },
  };
};

export const deleteSingleExam = (id) => (dispatch) => {
  Api.delete(`dashboard/Teachers/deleteExam?id=${id}`)
    .then((res) => {
      console.log("res :>> ", res);
      dispatch({ type: TEACHER.DELETE_EXAM, payload: id });
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

export const EditExamData = (id, data) => (dispatch) => {
  Api.put(`dashboard/Teachers/editExam?id=${id}`, data)
    .then((res) => {
      console.log("res :>> ", res);
      dispatch({ type: TEACHER.TEACHER_RESPONSE, payload: res.message });
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};

export const VerifiedStudentForExam = () => (dispatch) => {
  Api.get(`dashboard/Teachers/StudentForExam`)
    .then((res) => {
      console.log("res :>> ", res);
      dispatch({ type: TEACHER.VERIFIED_STUDENTS, payload: res.data });
    })
    .catch((error) => {
      console.log("error :>> ", error);
    });
};
