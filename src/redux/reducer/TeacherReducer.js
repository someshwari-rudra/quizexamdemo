import { TEACHER } from "../actions/Constants";

const initialState = {
  ViewStudent: [],
  ViewSingleStudentData: [],
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
    default:
      return state;
  }
};
