import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordAction } from "../redux/actions/auth";
import { AUTH } from "../redux/actions/Constants";
import { OnChange } from "../redux/actions/OnChange";
// import { useSelector } from 'react-redux';
import CustomTextField from "../reusableComponents/CustomTextField";

const ForgetPassword = () => {
  const { response, loading } = useSelector((state) => state.Auth);
  const ForgetPasswordField = {
    id: 1,
    name: "email",
    type: "email",
    inputType: "input",
    placeholder: "Email",
    pattern:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    errorMessage: "Email is Required..!",
    patternError: "Enter valid Email...!",
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
  const onsubmit = (data) => {
    delete data.answer;
    dispatch(forgotPasswordAction(data));
    dispatch({ type: AUTH.LOADING });
    reset();
    Object.keys(data).map((item) => {
      return dispatch(OnChange(item, ""));
    });
  };

  return (
    <div>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="login_wrapper">
          <h1 className="signUp">Forget Password</h1>
          {response && (
            <div className={`alert alert-success mt-3`} role="alert">
              {response}
            </div>
          )}
          <form onSubmit={handleSubmit(onsubmit)}>
            <CustomTextField
              {...ForgetPasswordField}
              register={register}
              watch={watch}
              setValue={setValue}
              getValues={getValues}
              errors={errors}
            />
            <div className="d-flex flex-column justify-content-center align-items-center">
              <button
                type="submit"
                className="btn btn-primary mt-3"
                disabled={loading}
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
    </div>
  );
};

export default ForgetPassword;
