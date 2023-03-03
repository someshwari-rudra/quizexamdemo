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
  saveOnchnage: true,
  ViewAllExam: [],
  ViewSingleExam: [],
  VerifiedStudents: [],
  showModal: false,
  loading: false,
  subjectNameExits: false,
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
        questions: [...state.questions, payload],
      };
    case TEACHER.SUBJECT_NAME:
      return {
        ...state,
        subjectName: payload,
      };
    case TEACHER.STORE_NOTES:
      return {
        ...state,
        notes: [...state.notes, payload],
      };
    case TEACHER.PREV_QUESTION:
      return {
        ...state,
        prev_que: [...state.prev_que, payload.data],
        currentIndex: payload.curIndexLength,
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
        prev_Value: false,
      };
    case TEACHER.TEACHER_RESPONSE:
      return {
        ...state,
        response: payload,
      };
    case TEACHER.SAVE_ONCHANGE:
      return {
        ...state,
        saveOnchnage: payload,
      };
    case TEACHER.VIEW_ALL_EXAM:
      return {
        ...state,
        ViewAllExam: payload,
      };
    case TEACHER.VIEW_SINGLE_EXAM:
      return {
        ...state,
        ViewSingleExam: payload,
      };
    case TEACHER.SHOW_MODAL:
      return {
        ...state,
        showModal: !state.showModal,
      };
    case TEACHER.POST_PREVIOUS_VALUES:
      return {
        ...state,
        questions: payload.data,
        prev_que: payload.prevValues,
      };
    case TEACHER.DELETE_EXAM:
      const allExamdata = [...state.ViewAllExam];
      const data = allExamdata.filter((item) => item._id !== payload);
      console.log("data :>> ", data);
      return {
        ...state,
        ViewAllExam: data,
      };
    case TEACHER.VERIFIED_STUDENTS:
      return {
        ...state,
        VerifiedStudents: payload,
      };
    case TEACHER.LOADING:
      return {
        ...state,
        loading: !state.loading,
      };
    case TEACHER.CHANGE_SUBJECT_NAME:
      console.log("payload :>> ", payload);
      return {
        ...state,
        subjectNameExits: payload,
      };
    default:
      return state;
  }
};
