import Api from "../../config/api";
import { TEACHER } from "./Constants";

export const ViewStudentData = () => (dispatch) => {
  Api.get("/dashboard/Teachers").then((response) => {
    console.log("response.data :>> ", response.data);
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
