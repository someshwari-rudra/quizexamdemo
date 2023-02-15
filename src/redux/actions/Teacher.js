import Api from "../../config/api"
import { TEACHER } from "./Constants";

export const ViewStudentData = () => (dispatch) => {
  Api.get("/dashboard/Teachers").then((response) => {
      console.log("response.data :>> ", response.data)
      dispatch({type:TEACHER.VIEW_STUDENT, payload:response.data})
  });
};