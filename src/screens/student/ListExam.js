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
   const ExamFormBtnAttribute = [
     {
       value: "Prev",
       typeOf: "prev",
       type: "button",
      //  disabled:
      //    prevValueExists.length === 0 || currentIndex === 0 ? true : false,
      //  onClick: () => handlePrevious(),
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
      //  disabled: prevValueExists.length < 1 ? true : false,
      //  onClick: (data) => dispatch(PostExamQuestions(data)),
     },
   ];

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center">
      <ExamForm
        fields={CreateExamFields}
        watch={watch}
        register={register}
        onSubmit={onSubmit}
        errors={errors}
        ExamFormBtnAttribute={ExamFormBtnAttribute}
        // data={allQuestions}
      />
    </div>
  );
};

export default ListExam;
