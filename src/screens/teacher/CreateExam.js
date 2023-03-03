import React from "react";
import ReusableExam from "../../reusableComponents/ResuableExam";

const CreateExam = () => {
  return (
    <div>
      <ReusableExam request={"CREATE_EXAM"} title={"Create Exam"} />
    </div>
  );
};

export default CreateExam;

// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import ExamForm from "../../components/ExamForm";
// import Loading from "../../components/Loading";
// import { CreateExamFields } from "../../Data/CreateExamFields";
// import { STUDENT, TEACHER } from "../../redux/actions/Constants";
// import { ClearInputValues, OnChange } from "../../redux/actions/OnChange";
// import {
//   clearAllOnsubmit,
//   PostExamQuestions,
//   RemoveQuestion,
//   saveOnChange,
//   StoreExamQuestions,
//   StoreNotes,
//   StoreSubjectName,
// } from "../../redux/actions/Teacher";
// import ResuableModal from "../../reusableComponents/ResuableModal";
// import { handleNext, handlePrevious } from "../../utils/HandleExam";

// const CreateExam = ({ request }) => {
//   const dispatch = useDispatch();
//   const prevValueExists = useSelector((state) => state.teacher.prev_que);
//   const currentIndex = useSelector((state) => state.teacher.currentIndex);
//   const subjectName = useSelector((state) => state.teacher.subjectName);
//   const questionsAll = useSelector((state) => state.teacher.questions);
//   const notes = useSelector((state) => state.teacher.notes);
//   const response = useSelector((state) => state.teacher.response);
//   const saveOnchnage = useSelector((state) => state.teacher.saveOnchnage);
//   const ONchnage = useSelector((state) => state.OnChangeReducer);
//   const showModal = useSelector((state) => state.teacher.showModal);
//   const loading = useSelector((state) => state.teacher.loading);

//   const handleClose = () => {
//     dispatch({ type: TEACHER.SHOW_MODAL });
//   };
//   const handleShow = () => {
//     dispatch({ type: TEACHER.SHOW_MODAL });
//   };
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
//     setValue,
//     clearErrors,
//     getValues,
//   } = useForm();

//   useEffect(() => {
//     reset();
//     dispatch(clearAllOnsubmit());
//     dispatch({ type: TEACHER.TEACHER_RESPONSE, payload: "" });
//   }, [dispatch, reset]);

//   const ExamFormBtnAttribute = [
//     {
//       value: "Prev",
//       typeOf: "prev",
//       type: "button",
//       disabled:
//         prevValueExists.length === 0 || currentIndex === 0 ? true : false,
//       onClick: () =>
//         handlePrevious(
//           currentIndex,
//           prevValueExists,
//           setValue,
//           dispatch,
//           clearErrors
//         ),
//     },
//     {
//       value: "Changes",
//       typeOf: "changes",
//       type: "button",
//       disabled: saveOnchnage,
//       onClick: () => handleShow(),
//     },
//     {
//       value: "Next",
//       typeOf: "next",
//       type: "submit",
//     },
//     {
//       value: "Submit",
//       typeOf: "submit",
//       type: "button",
//       disabled: prevValueExists.length < 15 ? true : false,
//       onClick: (data) => handleOnsubmit(data),
//     },
//   ];

//   const removeEmptyNote = notes.filter((item) => item !== "");

//   const allQuestions = {
//     subjectName: subjectName,
//     questions: questionsAll,
//     notes: removeEmptyNote,
//   };
//   console.log("allQuestions :>> ", allQuestions);
//   const handleOnsubmit = () => {
//     if (request === TEACHER.CREATE_EXAM) {
//       dispatch(PostExamQuestions(allQuestions));
//     }
//     if (request === TEACHER.VIEW_SINGLE_EXAM) {
//       //  dispatch(EditExamData(id, allQuestions));
//     }

//     dispatch(clearAllOnsubmit());
//     dispatch(OnChange("subject", ""));
//     dispatch(StoreSubjectName(""));
//     setValue("subject", "");
//     dispatch({ type: TEACHER.LOADING });
//   };

//   const handleSaveChanges = () => {
//     const questions = {
//       question: ONchnage.question,
//       options: [
//         ONchnage.Option1,
//         ONchnage.Option2,
//         ONchnage.Option3,
//         ONchnage.Option4,
//       ],
//       answer: ONchnage.answer,
//     };
//     const data = {
//       question: ONchnage.question,
//       option: ONchnage.option,
//       Option1: ONchnage.Option1,
//       Option2: ONchnage.Option2,
//       Option3: ONchnage.Option3,
//       Option4: ONchnage.Option4,
//       answer: ONchnage.answer,
//       notes: ONchnage.notes,
//     };

//     if (currentIndex >= 0 && currentIndex < questionsAll.length) {
//       dispatch(RemoveQuestion(currentIndex, questions, data));
//       dispatch({ type: TEACHER.SHOW_MODAL });
//       reset();
//       dispatch(ClearInputValues());
//       handleNext(currentIndex, prevValueExists, setValue, dispatch);
//     }
//   };
//   const HandleOnNext = (data) => {
//     const questions = { ...data };
//     console.log("data-createExam :>> ", data);
//     const { subject, question, answer, option, notes, ...restOptions } =
//       questions;
//     const options = [];
//     options.push(...Object.values(restOptions));

//     const storeQueOptionAns = {
//       question: question,
//       answer: answer,
//       options: options,
//     };
//     console.log("storeQueOptionAns :>> ", storeQueOptionAns);
//     dispatch(saveOnChange(true));
//     if (!(currentIndex >= 0 && currentIndex < questionsAll.length)) {
//       dispatch(StoreSubjectName(subject));
//       dispatch(StoreNotes(notes));
//       dispatch(StoreExamQuestions(storeQueOptionAns, prevValueExists.length));
//       dispatch({
//         type: TEACHER.PREV_QUESTION,
//         payload: { data: data, curIndexLength: prevValueExists.length + 1 },
//       });
//     }
//     reset();
//     dispatch(ClearInputValues());
//     dispatch(OnChange("subject", subjectName));
//     setValue("subject", subjectName);
//     handleNext(currentIndex, prevValueExists, setValue, dispatch);
//   };

//   const onSubmit = handleSubmit(HandleOnNext);
//   const selectedOption = getValues().option;
//   const answer = getValues()[selectedOption];

//   return (
//     <div
//       className={`d-flex mt-4 justify-content-center flex-column align-items-center position-relative ${
//         loading && "opacity"
//       }`}
//     >
//       <h1>Create Exam</h1>
//       <Loading />
//       {response && (
//         <div className={`alert alert-info mt-3`} role="alert">
//           {response}
//         </div>
//       )}
//       <ExamForm
//         fields={CreateExamFields}
//         watch={watch}
//         register={register}
//         onSubmit={onSubmit}
//         getValues={getValues}
//         errors={errors}
//         ExamFormBtnAttribute={ExamFormBtnAttribute}
//         setValue={setValue}
//         answer={answer}
//       />
//       <ResuableModal
//         show={showModal}
//         handleClose={handleClose}
//         handleSaveChanges={handleSaveChanges}
//         title={"Change Question"}
//         body={"Are you sure you want to change?"}
//       />
//     </div>
//   );
// };

// export default CreateExam;
