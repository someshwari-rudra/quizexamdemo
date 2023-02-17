import { TEACHER } from "../actions/Constants";

const initialState = {
  ViewStudent: [],
  ViewSingleStudentData: [],
  subjectName: "",
  Store_Questions: [],
};
export const TeacherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TEACHER.VIEW_STUDENT:
      return {
        ...state,
        ViewStudent: payload,
      };
    case TEACHER.VIEW_SINGLE_STUDENT:
      return {
        ...state,
        ViewSingleStudentData: payload,
      };
    case TEACHER.STORE_QUESTIONS:
      return {
        ...state,
        Store_Questions: [...state.Store_Questions, payload],
      };
    default:
      return state;
  }
};
