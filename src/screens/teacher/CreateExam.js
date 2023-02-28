import React from "react";
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
  saveOnChange,
  StoreExamQuestions,
} from "../../redux/actions/Teacher";
import ResuableModal from "../../reusableComponents/ResuableModal";

const CreateExamClone = () => {
  const dispatch = useDispatch();
  const prevValueExists = useSelector((state) => state.teacher.prev_que);
  const currentIndex = useSelector((state) => state.teacher.currentIndex);
  const subjectName = useSelector((state) => state.teacher.subjectName);
  const questionsAll = useSelector((state) => state.teacher.questions);
  const notes = useSelector((state) => state.teacher.notes);
  const response = useSelector((state) => state.teacher.response);
  const saveOnchnage = useSelector((state) => state.teacher.saveOnchnage);
  const ONchnage = useSelector((state) => state.OnChangeReducer);

  // const [show, setShow] = useState(false);
  const showModal = useSelector((state) => state.teacher.showModal);

  const handleClose = () => {
    dispatch({ type: TEACHER.SHOW_MODAL });
  };
  const handleShow = () => {
    dispatch({ type: TEACHER.SHOW_MODAL });
  };
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const handlePrevious = () => {
    dispatch({ type: TEACHER.PREV_LOADING, payload: true });
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
      value: "Changes",
      typeOf: "changes",
      type: "button",
      disabled: saveOnchnage,
      onClick: (id) => handleShow(),
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
    console.log("questions :>> ", questions);
    console.log("data :>> ", data);
    if (currentIndex >= 0 && currentIndex < questionsAll.length) {
      dispatch(RemoveQuestion(currentIndex, questions, data));
      // setShow(false);
      dispatch({ type: TEACHER.SHOW_MODAL });
      reset();
      dispatch(ClearInputValues());
      dispatch({
        type: TEACHER.SET_CURRENT_INDEX,
        payload: currentIndex + 1,
      });
      if (currentIndex >= 0) {
        for (let prop in prevValueExists[currentIndex + 1]) {
          if (prevValueExists[currentIndex + 1].hasOwnProperty(prop)) {
            setValue(prop, prevValueExists[currentIndex + 1][prop]);
            dispatch(OnChange(prop, prevValueExists[currentIndex + 1][prop]));
          }
        }
        dispatch({ type: TEACHER.PREV_LOADING, payload: true });
      }
    }
  };
  const HandleOnNext = (data) => {
    dispatch(saveOnChange(true));
    if (!(currentIndex >= 0 && currentIndex < questionsAll.length)) {
      dispatch(StoreExamQuestions(data));
      dispatch({ type: TEACHER.PREV_QUESTION, payload: data });
    }
    reset();
    dispatch(ClearInputValues());
    dispatch(OnChange("subject", subjectName));
    setValue("subject", subjectName);
    dispatch({
      type: TEACHER.SET_CURRENT_INDEX,
      payload: currentIndex + 1,
    });
    if (currentIndex >= 0) {
      for (let prop in prevValueExists[currentIndex + 1]) {
        if (prevValueExists[currentIndex + 1].hasOwnProperty(prop)) {
          setValue(prop, prevValueExists[currentIndex + 1][prop]);
          dispatch(OnChange(prop, prevValueExists[currentIndex + 1][prop]));
        }
      }
      dispatch({ type: TEACHER.PREV_LOADING, payload: true });
    }
  };

  const onSubmit = handleSubmit(HandleOnNext);
  const selectedOption = getValues().option;
  const answer = getValues()[selectedOption];

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
  );
};

export default CreateExamClone;
