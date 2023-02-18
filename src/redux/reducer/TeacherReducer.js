import { TEACHER } from "../actions/Constants";

const initialState = {
  ViewStudent: [],
  ViewSingleStudentData: [],
  subjectName: undefined,
  questions: [],
  prev_que: [],
  currentIndex: -1,
  prev_Value:false,
  notes: [],
  response: "",
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
      const { subject, notes, ...rest } = payload;
      return {
        ...state,
        subjectName: subject,
        notes: [...state.notes, notes],
        questions: [...state.questions, rest],
      };
    case TEACHER.PREV_QUESTION:
      const { subject: sub, ...previous } = payload;
      return {
        ...state,
        prev_que: [...state.prev_que, { ...previous }],
        currentIndex: state.prev_que.length,
      };
    case TEACHER.SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: payload,
      };
    case TEACHER.PREV_LOADING:
      return {
        ...state,
        prev_Value: !state.prev_Value,
      };
    case TEACHER.TEACHER_RESPONSE:
      return {
        ...state,
        response: payload,
      };
    default:
      return state;
  }
};
