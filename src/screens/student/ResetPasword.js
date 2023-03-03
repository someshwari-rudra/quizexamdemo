import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import CustomTextField from "../../reusableComponents/CustomTextField";
import { ResetLoginFields } from "../../Data/ResetPasswordFields";
import { OnChange } from "../../redux/actions/OnChange";
import { ResetPasswordAction } from "../../redux/actions/auth";
import { AUTH } from "../../redux/actions/Constants";

const ResetPasword = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    setValue,
    reset,
  } = useForm();
  const dispatch = useDispatch();
  const { loading, response } = useSelector((state) => state.Auth);

  const onsubmit = (data) => {
    delete data.answer;
    console.log(data);
    reset();
    const properties = Object.keys(data);
    properties.map((item) => {
      return dispatch(OnChange(item, ""));
    });
    dispatch(ResetPasswordAction(data));
    dispatch({ type: AUTH.LOADING });
  };

  return (
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="login_wrapper">
        <h1 className="signUp">Reset Password</h1>
        {response && (
          <div className={`alert alert-success mt-3`} role="alert">
            {response}
          </div>
        )}
        <form action="" onSubmit={handleSubmit(onsubmit)}>
          {ResetLoginFields.map((currEle) => {
            const { id, ...inputFieldData } = currEle;
            return (
              <CustomTextField
                key={id}
                {...inputFieldData}
                register={register}
                watch={watch}
                errors={errors}
                getValues={getValues}
                setValue={setValue}
              />
            );
          })}

          <div className="d-flex flex-column justify-content-center align-items-center">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary mt-3 w-100"
            >
              {loading && (
                <div
                  className="spinner-border spinner-border-sm me-1"
                  role="status"
                >
                  <span className="sr-only"></span>
                </div>
              )}
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ResetPasword;
