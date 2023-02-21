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
  diableSubject: false,
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
      const prevQuestions = [...state.prev_que];
      delete payload.data.subject;
      prevQuestions.splice(payload.index, 1, payload.data);
      const ques = [...state.questions];
      delete payload.que.subject;
      ques.splice(payload.index, 1, payload.que);
      return {
        ...state,
        prev_que: prevQuestions,
        questions: ques,
      };
    case TEACHER.DISABLE_SUBJECT:
      return {
        ...state,
        prev_Value: payload,
      };
    case TEACHER.CLEAR_ALL_ONSUBMIT:
      return {
        ...state,
        questions: [],
        prev_que: [],
        currentIndex: 0,
        prev_Value:false
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
