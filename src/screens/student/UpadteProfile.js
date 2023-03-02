import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { OnChange } from "../../redux/actions/OnChange";
import { updateStudentProfile } from "../../redux/actions/Student";
import CustomTextField from "../../reusableComponents/CustomTextField";

const UpadteProfile = () => {
  const inputFieldData = {
    id: 1,
    name: "name",
    type: "text",
    inputType: "input",
    placeholder: "Name",
    required: true,
    pattern: /^[a-z ,.'-]+$/i,
    errorMessage: "Name is required..!",
    patternError: "Enter valid Name...!",
    // required: true,
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
  const dispatch = useDispatch();
  const { response } = useSelector((state) => state.student);
  const onSubmit = (data) => {
    const name = data?.name;
    dispatch(updateStudentProfile(name));
    reset();
    dispatch(OnChange("name", ""));
  };

  return (
    <>
      <div className="container login_wrapper w-25 mt-5">
        <h1 className="text-center">Update Profile</h1>
        {response && (
          <div className={`alert alert-info mt-3`} role="alert">
            {response}
          </div>
        )}
        <form action="" onSubmit={handleSubmit((data) => onSubmit(data))}>
          <div className="mt-3">
            <CustomTextField
              {...inputFieldData}
              disable={false}
              register={register}
              watch={watch}
              errors={errors}
              getValues={getValues}
              setValue={setValue}
            />
          </div>
          <button className="btn btn-primary w-100 my-2">Submit</button>
        </form>
      </div>
    </>
  );
};

export default UpadteProfile;
