import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ExamForm from "../../components/ExamForm";
import Loading from "../../components/Loading";
import { GiveExamFields } from "../../Data/GiveExamFields";
import { STUDENT, TEACHER } from "../../redux/actions/Constants";
import { ClearInputValues, OnChange } from "../../redux/actions/OnChange";
import { getSingleExam, GiveExam } from "../../redux/actions/Student";
import {
  clearAllOnsubmit,
  StoreExamQuestions,
  StoreSubjectName,
} from "../../redux/actions/Teacher";
import {
  handleNext,
  handlePrevious,
  uploadQuestions,
} from "../../utils/HandleExam";

const SingleExam = () => {
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
  const { id } = useParams();
  const {
    notes: AllNotes,
    questions: AllQuestions,
    currentIndex,
    loading,
    subjectName,
  } = useSelector((state) => state.teacher);
  const prevValueExists = useSelector((state) => state.teacher.prev_que);
  const { giveExam, response } = useSelector((state) => state.student);
  const ONchnage = useSelector((state) => state.OnChangeReducer);

  useEffect(() => {
    dispatch(getSingleExam(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(StoreSubjectName(subjectName));
    dispatch({ type: TEACHER.CHANGE_SUBJECT_NAME, payload: true });
    dispatch({ type: STUDENT.RESPONSE, payload: "" });
    const clearValuesOnchnage = Object.keys(ONchnage);
    clearValuesOnchnage.map((item) => {
      return dispatch(OnChange(item, ""));
    });
  }, [dispatch, reset]);

  useEffect(() => {
    reset();
    dispatch(clearAllOnsubmit());
    for (let i = 0; i < giveExam?.length; i++) {
      dispatch(StoreExamQuestions({ question: giveExam[i]["_id"] }));
    }
    uploadQuestions(giveExam, AllNotes, dispatch);
    for (let prop in prevValueExists[currentIndex]) {
      if (prevValueExists[currentIndex].hasOwnProperty(prop)) {
        setValue(prop, prevValueExists[currentIndex][prop]);
        dispatch(OnChange(prop, prevValueExists[currentIndex][prop]));
      }
    }
  }, [dispatch, id, reset, giveExam, AllNotes]);

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
      value: "Skip",
      typeOf: "skip",
      type: "button",
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
      disabled: currentIndex < 7 ? true : false,
      onClick: (data) => handleOnsubmit(data),
    },
  ];

  const handleOnsubmit = (data) => {
    console.log("data submit data:>> ", AllQuestions);
    dispatch({ type: TEACHER.LOADING });
    dispatch(GiveExam(id, AllQuestions));
    dispatch({ type: TEACHER.CHANGE_SUBJECT_NAME, payload: false });
    dispatch(clearAllOnsubmit());
  };

  const HandleOnNext = (data) => {
    console.log("data :>> ", data);
    const questions = { ...data };
    const { subject, question, answer, option, notes, ...restOptions } =
      questions;
    const options = [];
    options.push(...Object.values(restOptions));

    if (currentIndex >= 0 && currentIndex < AllQuestions.length) {
      prevValueExists[currentIndex]["answer"] = ONchnage.answer;
      prevValueExists[currentIndex]["option"] = ONchnage.option;
      AllQuestions[currentIndex]["answer"] = ONchnage.answer;
      dispatch({ type: TEACHER.CHANGE_SUBJECT_NAME, payload: true });
      reset();
      dispatch(ClearInputValues());
      handleNext(currentIndex, prevValueExists, setValue, dispatch);
    }
  };

  const onSubmit = handleSubmit(HandleOnNext);
  const selectedOption = getValues().option;
  const answer = getValues()[selectedOption];

  return (
    <div>
      {giveExam?.length ? (
        <div
          className={`d-flex mt-4 justify-content-center flex-column align-items-center position-relative ${
            loading && "opacity"
          }`}
        >
          <h1>Give Exam</h1>
          <Loading />
          {response && (
            <div className={`alert alert-info mt-3`} role="alert">
              {response}
            </div>
          )}
          <ExamForm
            fields={GiveExamFields}
            watch={watch}
            register={register}
            onSubmit={onSubmit}
            getValues={getValues}
            errors={errors}
            ExamFormBtnAttribute={ExamFormBtnAttribute}
            setValue={setValue}
            answer={answer}
            data={AllQuestions}
          />
        </div>
      ) : (
        <>
          <h1 className=" d-flex justify-content-center align-items-center">
            loading....
          </h1>
        </>
      )}
    </div>
  );
};

export default SingleExam;
