import React from "react";
import { useParams } from "react-router-dom";
import ReusableExam from "../../reusableComponents/ResuableExam";

const EditSingleExam = () => {
  const { id } = useParams();
  return (
    <div>
      <ReusableExam request={"EDIT_EXAM"} id={id} title={"Edit Exam"} />
    </div>
  );
};
 
export default EditSingleExam;

// import React, { useEffect } from "react";
// import { useForm } from "react-hook-form";
// import { useDispatch, useSelector } from "react-redux";
// import { useParams } from "react-router-dom";
// import ExamForm from "../../components/ExamForm";
// import Loading from "../../components/Loading";
// import { CreateExamFields } from "../../Data/CreateExamFields";
// import { TEACHER } from "../../redux/actions/Constants";
// import { ClearInputValues, OnChange } from "../../redux/actions/OnChange";
// import {
//   clearAllOnsubmit,
//   EditExamData,
//   RemoveQuestion,
//   saveOnChange,
//   StoreExamQuestions,
//   StoreNotes,
//   StoreSubjectName,
// } from "../../redux/actions/Teacher";
// import ResuableModal from "../../reusableComponents/ResuableModal";
// import {
//   handleNext,
//   handlePrevious,
//   uploadQuestions,
// } from "../../utils/HandleExam";

// const EditSingleExam = () => {
//   const {
//     register,
//     handleSubmit,
//     watch,
//     reset,
//     formState: { errors },
//     setValue,
//     getValues,
//     clearErrors,
//   } = useForm();
//   const dispatch = useDispatch();
//   const { id } = useParams();
//   const {
//     showModal,
//     ViewSingleExam,
//     notes: AllNotes,
//     saveOnchnage,
//     questions: AllQuestions,
//     subjectName,
//     response,
//     currentIndex,
//   } = useSelector((state) => state.teacher);
//   const prevValueExists = useSelector((state) => state.teacher.prev_que);
//   const loading = useSelector((state) => state.teacher.loading);
//   const ONchnage = useSelector((state) => state.OnChangeReducer);

//   useEffect(() => {
//     reset();
//     dispatch(clearAllOnsubmit());
//     const clearValuesOnchnage = Object.keys(ONchnage);
//     clearValuesOnchnage.map((item) => {
//       return dispatch(OnChange(item, ""));
//     });
//     dispatch({ type: TEACHER.TEACHER_RESPONSE, payload: "" });
//     for (let i = 0; i < ViewSingleExam.length; i++) {
//       console.log("runnded :>> ", "runnded");
//       dispatch(StoreExamQuestions(ViewSingleExam[i]));
//     }
//     uploadQuestions(ViewSingleExam, AllNotes, dispatch);
//   }, [dispatch, id, reset, ViewSingleExam, AllNotes]);

//   useEffect(() => {
//     for (let prop in prevValueExists[currentIndex]) {
//       if (prevValueExists[currentIndex].hasOwnProperty(prop)) {
//         dispatch(OnChange(prop, prevValueExists[currentIndex][prop]));
//         setValue(prop, prevValueExists[currentIndex][prop]);
//       }
//     }
//   }, [prevValueExists, currentIndex, dispatch]);

//   const handleClose = () => {
//     dispatch({ type: TEACHER.SHOW_MODAL });
//   };
//   const handleShow = () => {
//     dispatch({ type: TEACHER.SHOW_MODAL });
//   };
//   const ExamFormBtnAttribute = [
//     {
//       value: "Prev",
//       typeOf: "prev",
//       type: "button",
//       disabled:
//         prevValueExists.length === 0 || currentIndex === 0 ? true : false,
//       onClick: () => {
//         handlePrevious(
//           currentIndex,
//           prevValueExists,
//           setValue,
//           dispatch,
//           clearErrors
//         );
//       },
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
//       onClick: (data) => {
//         handleOnsubmit(data);
//         console.log("data :>> ", data);
//       },
//     },
//   ];

//   const allQuestions = {
//     subjectName: subjectName,
//     questions: AllQuestions,
//     notes: AllNotes,
//   };
//   const handleOnsubmit = (data) => {
//     console.log("data :>> ", data);
//     // dispatch(PostExamQuestionss(data));
//     dispatch(EditExamData(id, allQuestions));
//     dispatch({ type: TEACHER.LOADING });
//     dispatch(clearAllOnsubmit());
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
//     if (currentIndex >= 0 && currentIndex < AllQuestions.length) {
//       dispatch(RemoveQuestion(currentIndex, questions, data));
//       dispatch({ type: TEACHER.SHOW_MODAL });
//       reset();
//       dispatch(ClearInputValues());
//       handleNext(currentIndex, prevValueExists, setValue, dispatch);
//     }
//   };
//   const HandleOnNext = (data) => {
//     console.log("data :>> ", data);
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
//     if (!(currentIndex >= 0 && currentIndex < AllQuestions.length)) {
//       dispatch(StoreSubjectName(subject));
//       dispatch(StoreNotes(notes));
//       dispatch(StoreExamQuestions(storeQueOptionAns));
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
//     <div>
//       <div
//         className={`d-flex mt-4 justify-content-center flex-column align-items-center position-relative ${
//           loading && "opacity"
//         }`}
//       >
//         <h1>Edit Exam</h1>
//         <Loading />
//         {response && (
//           <div className={`alert alert-info mt-3`} role="alert">
//             {response}
//           </div>
//         )}
//         <ExamForm
//           fields={CreateExamFields}
//           watch={watch}
//           register={register}
//           onSubmit={onSubmit}
//           getValues={getValues}
//           errors={errors}
//           ExamFormBtnAttribute={ExamFormBtnAttribute}
//           setValue={setValue}
//           answer={answer}
//           data={allQuestions}
//         />
//         <ResuableModal
//           show={showModal}
//           handleClose={handleClose}
//           handleSaveChanges={handleSaveChanges}
//           title={"Change Question"}
//           body={"Are you sure you want to change?"}
//         />
//       </div>
//     </div>
//   );
// };

// export default EditSingleExam;
