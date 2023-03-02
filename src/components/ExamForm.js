import React from "react";
import ButtonMapping from "../reusableComponents/ButtonMapping";
import CustomTextField from "../reusableComponents/CustomTextField";

const ExamForm = ({
  fields,
  register,
  errors,
  onSubmit,
  watch,
  ExamFormBtnAttribute,
  data,
  setValue,
  getValues,
  answer,
}) => {
  return (
    <div>
      <div className="form">
        <form onSubmit={onSubmit}>
          {fields?.map((currEle) => {
            const { id, ...inputFieldData } = currEle;
            return (
              <CustomTextField
                key={id}
                {...inputFieldData}
                disable={true}
                register={register}
                watch={watch}
                errors={errors}
                getValues={getValues}
                setValue={setValue}
                answer={answer}
              />
            );
          })}
          <ButtonMapping buttonAttributes={ExamFormBtnAttribute} data={data} />
        </form>
      </div>
    </div>
  );
};

export default ExamForm;
