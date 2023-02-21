import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import ExamForm from "../../components/ExamForm";
import { CreateExamFields } from "../../Data/CreateExamFields";
import { TEACHER } from "../../redux/actions/Constants";
import { ClearInputValues, OnChange } from "../../redux/actions/OnChange";
import {
  clearAllOnsubmit,
  PostExamQuestions,
  RemoveQuestion,
  StoreExamQuestions,
} from "../../redux/actions/Teacher";

const CreateExam = () => {
  const dispatch = useDispatch();
  const prevValueExists = useSelector((state) => state.teacher.prev_que);
  const currentIndex = useSelector((state) => state.teacher.currentIndex);
  const subjectName = useSelector((state) => state.teacher.subjectName);
  const questionsAll = useSelector((state) => state.teacher.questions);
  const notes = useSelector((state) => state.teacher.notes);
  const response = useSelector((state) => state.teacher.response);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
    getValues
  } = useForm();

  useEffect(() => {
    setValue("subject", subjectName);
  }, [setValue, subjectName]);

  const handlePrevious = () => {
    if (currentIndex > 0) {
      dispatch({
        type: TEACHER.SET_CURRENT_INDEX,
        payload: currentIndex - 1,
      });
    }
    for (let prop in prevValueExists[currentIndex - 1]) {
      if (prevValueExists[currentIndex - 1].hasOwnProperty(prop)) {
        dispatch(OnChange(prop, prevValueExists[currentIndex - 1][prop]));
        setValue(prop, prevValueExists[currentIndex - 1][prop]);
      }
    }
    dispatch({ type: TEACHER.PREV_LOADING, payload: true });
  };
  const ExamFormBtnAttribute = [
    {
      value: "Prev",
      typeOf: "prev",
      type: "button",
      disabled:
        prevValueExists.length === 0 || currentIndex === 0 ? true : false,
      onClick: () => handlePrevious(),
    },
    {
      value: "Skip",
      typeOf: "skip",
      type: "button",
      // onClick: (id) => dispatch(deleteUserListByIdAction(id)),
    },
    {
      value: "Next",
      typeOf: "next",
      type: "submit",
      // onClick: (id) => dispatch(deleteUserListByIdAction(id)),
    },
    {
      value: "Submit",
      typeOf: "submit",
      type: "button",
      disabled: prevValueExists.length < 15 ? true : false,
      onClick: (data) => handleOnsubmit(data),
    },
  ];
  const handleOnsubmit = (data) => {
    dispatch(PostExamQuestions(data));
    dispatch(clearAllOnsubmit());
  };
  const allQuestions = {
    subjectName: subjectName,
    questions: questionsAll,
    notes: notes,
  };

  console.log("allQuestions :>> ", allQuestions);

  const HandleOnNext = (data) => {
    const questions = { ...data };
    console.log("data-createExam :>> ", data);
    const { subject, question, answer, option, notes, ...restOptions } =
      questions;
    let options = [];
    options.push(...Object.values(restOptions));
    delete questions.Option1;
    delete questions.Option2;
    delete questions.Option3;
    delete questions.Option4; 
    delete questions.option;
    questions.options = options;
    if (currentIndex >= 0 && currentIndex < questionsAll.length) {
      dispatch(RemoveQuestion(currentIndex, questions, data));
      reset();
    } else {
      dispatch(StoreExamQuestions(questions));
      dispatch({ type: TEACHER.PREV_QUESTION, payload: data });
    }
    reset();
    dispatch(ClearInputValues());
    dispatch(OnChange("subject", subjectName));
    setValue("subject", subjectName);

    console.log("questionsAll.length :>> ", questionsAll.length);
    console.log("currentIndex :>> ", currentIndex);
    dispatch({
      type: TEACHER.SET_CURRENT_INDEX,
      payload: currentIndex + 1,
    });

    if (currentIndex > 1) {
      for (let prop in prevValueExists[currentIndex + 1]) {
        if (prevValueExists[currentIndex + 1].hasOwnProperty(prop)) {
          dispatch(OnChange(prop, prevValueExists[currentIndex + 1][prop]));
          setValue(prop, prevValueExists[currentIndex + 1][prop]);
        }
      }
      dispatch({ type: TEACHER.PREV_LOADING, payload: true });
    }
  };

  const onSubmit = handleSubmit(HandleOnNext);

  return (
    <div className="d-flex mt-4 justify-content-center flex-column align-items-center">
      <h1>Create Exam</h1>
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
        data={allQuestions}
      />
    </div>
  );
};

export default CreateExam;
