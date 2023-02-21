
import React from "react";
import ButtonMapping from "../reusableComponents/ButtonMapping";
import CustomTextField from "../reusableComponents/CustomTextField";

const ExamForm = ({ fields, register, errors, onSubmit, watch, ExamFormBtnAttribute, data, getValues}) => {

  return (
    <div>
      <div className="form">
        <form onSubmit={onSubmit}>
          {fields.map((currEle) => {
            const { id, ...inputFieldData } = currEle;
            return (
              <CustomTextField
                key={id}
                {...inputFieldData}
                register={register}
                watch={watch}
                errors={errors}
                getValues={getValues}
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
