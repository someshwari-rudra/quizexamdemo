import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ExamForm from "../components/ExamForm";
import Loading from "../components/Loading";
import { CreateExamFields } from "../Data/CreateExamFields";
import { TEACHER } from "../redux/actions/Constants";
import { ClearInputValues, OnChange } from "../redux/actions/OnChange";
import {
  clearAllOnsubmit,
  EditExamData,
  PostExamQuestions,
  RemoveQuestion,
  saveOnChange,
  StoreExamQuestions,
  StoreNotes,
  StoreSubjectName,
} from "../redux/actions/Teacher";
import {
  handleNext,
  handlePrevious,
  uploadQuestions,
} from "../utils/HandleExam";
import ResuableModal from "./ResuableModal";

const ReusableExam = ({ request, id, title }) => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
    getValues,
    clearErrors,
  } = useForm();
  const dispatch = useDispatch();
  const {
    showModal,
    ViewSingleExam,
    notes: AllNotes,
    saveOnchnage,
    questions: AllQuestions,
    subjectName,
    response,
    currentIndex,
  } = useSelector((state) => state.teacher);
  const prevValueExists = useSelector((state) => state.teacher.prev_que);
  const loading = useSelector((state) => state.teacher.loading);
  const ONchnage = useSelector((state) => state.OnChangeReducer);

  useEffect(() => {
    reset();
    dispatch(clearAllOnsubmit());
    dispatch({ type: TEACHER.TEACHER_RESPONSE, payload: "" });
    const clearValuesOnchnage = Object.keys(ONchnage);
    clearValuesOnchnage.map((item) => {
      return dispatch(OnChange(item, ""));
    });
  }, [dispatch, reset]);

  useEffect(() => {
    console.log("ViewSingleExam :>> ", ViewSingleExam);
    if (request === "EDIT_EXAM") {
      dispatch({ type: TEACHER.CHANGE_SUBJECT_NAME, payload: true });
      const clearValuesOnchnage = Object.keys(ONchnage);
      clearValuesOnchnage.map((item) => {
        return dispatch(OnChange(item, ""));
      });
      for (let i = 0; i < ViewSingleExam.length; i++) {
        dispatch(StoreExamQuestions(ViewSingleExam[i]));
      }
      uploadQuestions(ViewSingleExam, AllNotes, dispatch);
    }
  }, [dispatch, id, reset, ViewSingleExam, AllNotes, request]);

  useEffect(() => {
    if (request === "EDIT_EXAM") {
      for (let prop in prevValueExists[currentIndex]) {
        if (prevValueExists[currentIndex].hasOwnProperty(prop)) {
          dispatch(OnChange(prop, prevValueExists[currentIndex][prop]));
          setValue(prop, prevValueExists[currentIndex][prop]);
        }
      }
      dispatch(OnChange("subject", subjectName));
      setValue("subject", subjectName);
    }
  }, [prevValueExists, currentIndex, dispatch, request]);

  const handleClose = () => {
    dispatch({ type: TEACHER.SHOW_MODAL });
  };
  const handleShow = () => {
    dispatch({ type: TEACHER.SHOW_MODAL });
  };
  const ExamFormBtnAttribute = [
    {
      value: "Prev",
      typeOf: "prev",
      type: "button",
      disabled:
        prevValueExists.length === 0 || currentIndex === 0 ? true : false,
      onClick: () => {
        handlePrevious(
          currentIndex,
          prevValueExists,
          setValue,
          dispatch,
          clearErrors
        );
      },
    },
    {
      value: "Changes",
      typeOf: "changes",
      type: "button",
      disabled: saveOnchnage,
      onClick: () => handleShow(),
    },
    {
      value: "Next",
      typeOf: "next",
      type: "submit",
    },
    {
      value: "Submit",
      typeOf: "submit",
      type: "button",
      disabled: prevValueExists.length < 15 ? true : false,
      onClick: (data) => {
        handleOnsubmit(data);
        console.log("data :>> ", data);
      },
    },
  ];
  const removeEmptyNote = AllNotes.filter((item) => item !== "");

  const allQuestions = {
    subjectName: subjectName,
    questions: AllQuestions,
    notes: removeEmptyNote,
  };
  console.log("allQuestions :>> ", allQuestions);
  const handleOnsubmit = (data) => {
    console.log("data :>> ", data);
    if (request === "CREATE_EXAM") {
      dispatch(PostExamQuestions(allQuestions));
    }
    if (request === "EDIT_EXAM") {
      dispatch(EditExamData(id, allQuestions));
    }
    dispatch(clearAllOnsubmit());
    const allOnchnageValues = Object.keys(ONchnage);
    allOnchnageValues.map((item) => {
      return dispatch(OnChange(item, "")), setValue(item, "");
    });

    dispatch(OnChange("subject", ""));
    dispatch(StoreSubjectName(""));
    setValue("subject", "");
    dispatch({ type: TEACHER.LOADING });
  };

  const handleSaveChanges = () => {
    const questions = {
      question: ONchnage.question,
      options: [
        ONchnage.Option1,
        ONchnage.Option2,
        ONchnage.Option3,
        ONchnage.Option4,
      ],
      answer: ONchnage.answer,
    };
    const data = {
      question: ONchnage.question,
      option: ONchnage.option,
      Option1: ONchnage.Option1,
      Option2: ONchnage.Option2,
      Option3: ONchnage.Option3,
      Option4: ONchnage.Option4,
      answer: ONchnage.answer,
      notes: ONchnage.notes,
    };
    if (currentIndex >= 0 && currentIndex < AllQuestions.length) {
      dispatch(RemoveQuestion(currentIndex, questions, data));
      dispatch({ type: TEACHER.SHOW_MODAL });
      reset();
      dispatch(ClearInputValues());
      handleNext(currentIndex, prevValueExists, setValue, dispatch);
    }
  };
  const HandleOnNext = (data) => {
    console.log("data :>> ", data);
    const questions = { ...data };
    console.log("data-createExam :>> ", data);
    const { subject, question, answer, option, notes, ...restOptions } =
      questions;
    const options = [];
    options.push(...Object.values(restOptions));
    const storeQueOptionAns = {
      question: question,
      answer: answer,
      options: options,
    };

    console.log("storeQueOptionAns :>> ", storeQueOptionAns);
    dispatch(saveOnChange(true));
    if (!(currentIndex >= 0 && currentIndex < AllQuestions.length)) {
      console.log("subject :>> ", subject);
      dispatch(StoreSubjectName(subject));
      dispatch({ type: TEACHER.CHANGE_SUBJECT_NAME, payload: true });
      dispatch(StoreNotes(notes));
      dispatch(StoreExamQuestions(storeQueOptionAns));
      dispatch({
        type: TEACHER.PREV_QUESTION,
        payload: { data: data, curIndexLength: prevValueExists.length + 1 },
      });
    }
    reset();
    dispatch(ClearInputValues());
    // dispatch(OnChange("subject", subjectName));
    // setValue("subject", subjectName);
    handleNext(currentIndex, prevValueExists, setValue, dispatch);
  };

  const onSubmit = handleSubmit(HandleOnNext);
  const selectedOption = getValues().option;
  const answer = getValues()[selectedOption];

  return (
    <div>
      <div
        className={`d-flex mt-4 justify-content-center flex-column align-items-center position-relative ${
          loading && "opacity"
        }`}
      >
        <h1>{title}</h1>
        <Loading />
        {response && (
          <div className={`alert alert-info mt-3`} role="alert">
            {response}
          </div>
        )}
        <ExamForm
          fields={CreateExamFields}
          watch={watch}
          register={register}
          onSubmit={onSubmit}
          getValues={getValues}
          errors={errors}
          ExamFormBtnAttribute={ExamFormBtnAttribute}
          setValue={setValue}
          answer={answer}
          data={allQuestions}
        />
        <ResuableModal
          show={showModal}
          handleClose={handleClose}
          handleSaveChanges={handleSaveChanges}
          title={"Change Question"}
          body={"Are you sure you want to change?"}
        />
      </div>
    </div>
  );
};

export default ReusableExam;
