import React from "react";
import { useForm } from "react-hook-form";
import ExamForm from "../../components/ExamForm";
import { CreateExamFields } from "../../Data/CreateExamFields";

const ListExam = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();


  const HandleOnSubmit = (data) => {
    console.log("data-createExam :>> ", data);
    reset();
  };
  const onSubmit = handleSubmit(HandleOnSubmit);

  return (
    <div className="container-fluid">
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

export default ListExam;
