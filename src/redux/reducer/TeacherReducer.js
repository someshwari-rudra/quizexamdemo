import { TEACHER } from "../actions/Constants";

const initialState = {
  ViewStudent: [],
};
export const TeacherReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case TEACHER.VIEW_STUDENT:
      return {
        ...state,
        ViewStudent: payload,
      };
    default:
      return state;
  }
};
