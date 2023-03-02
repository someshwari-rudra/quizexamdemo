import { STUDENT } from "../actions/Constants";

const initialState = {
  allExamData: [],
  giveExam: [],
  response: "",
  studentProfile: [],
};
export const StudentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STUDENT.ALL_EXAM_DATA:
      return {
        ...state,
        allExamData: payload,
      };
    case STUDENT.GIVE_EXAM:
      return {
        ...state,
        giveExam: payload,
      };
    case STUDENT.RESPONSE:
      return {
        ...state,
        response: payload,
      };
    case STUDENT.PROFILE:
      return {
        ...state,
        studentProfile: payload,
      };
    default:
      return state;
  }
};
