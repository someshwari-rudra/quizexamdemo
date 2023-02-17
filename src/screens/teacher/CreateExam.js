import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import ExamForm from "../../components/ExamForm";
import { CreateExamFields } from "../../Data/CreateExamFields";
import { StoreExamQuestions } from "../../redux/actions/Teacher";

const CreateExam = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const HandleOnSubmit = (data) => {
    console.log("data-createExam :>> ", data);
    dispatch(StoreExamQuestions(data));
    reset();
  };

  const onSubmit = handleSubmit(HandleOnSubmit);

  return (
    <div className="d-flex mt-4 justify-content-center flex-column align-items-center">
      <h1>Create Exam</h1>
      <ExamForm
        fields={CreateExamFields}
        watch={watch}
        register={register}
        onSubmit={onSubmit}
        errors={errors}
      />
    </div>
  );
};

export default CreateExam;
