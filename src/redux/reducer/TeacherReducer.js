import { TEACHER } from "../actions/Constants";

const initialState = {
  ViewStudent: [],
  ViewSingleStudentData: [],
  subjectName: undefined,
  questions: [],
  prev_que: [],
  currentIndex: 0,
  prev_Value: false,
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
        currentIndex: state.prev_que.length + 1,
      };
    case TEACHER.SET_CURRENT_INDEX:
      return {
        ...state,
        currentIndex: payload,
      };
    case TEACHER.PREV_LOADING:
      return {
        ...state,
        prev_Value: payload,
      };
    case TEACHER.REMOVE_QUESTION:
      console.log("payload inside remmv:>> ", payload);
      return {
        ...state,
        notes: [...state.notes.filter((_, index) => index !== payload)],
        questions: state.questions.filter((_, index) => index !== payload),
        prev_que: state.prev_que.filter((_, index) => index !== payload),
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
