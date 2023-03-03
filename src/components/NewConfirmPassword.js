import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NewPasswordAction } from "../redux/actions/auth";
import { AUTH } from "../redux/actions/Constants";
import { OnChange } from "../redux/actions/OnChange";
import CustomTextField from "../reusableComponents/CustomTextField";

const NewConfirmPassword = () => {
  const { response, loading } = useSelector((state) => state.Auth);
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get("token");
  console.log(token);

  const NewConfirmPasswordFields = [
    {
      id: 3,
      name: "Password",
      inputType: "input",
      type: "password",
      pattern: /[a-zA-Z0-9]{6,30}/,
      autoComplete: "password",
      placeholder: "password",
      errorMessage: "password is required..!",
      patternError: "min password length is 6 and max 30",
      // required: true,
    },
    {
      id: 4,
      name: "ConfirmPassword",
      inputType: "input",
      type: "password",
      // pattern: "password",
      autoComplete: "password",
      placeholder: "confirm Password",
      errorMessage: "confirm Password is required..!",

      // required: true,
    },
  ];
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
    console.log("data :>> ", data);
    dispatch(NewPasswordAction(token, data));
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
          <h1 className="signUp">New Password</h1>
          {response && (
            <div className={`alert alert-success mt-3`} role="alert">
              {response}
            </div>
          )}
          <form onSubmit={handleSubmit(onsubmit)}>
            {NewConfirmPasswordFields.map((inputFields, index) => {
              return (
                <CustomTextField
                  key={index}
                  {...inputFields}
                  register={register}
                  watch={watch}
                  setValue={setValue}
                  getValues={getValues}
                  errors={errors}
                />
              );
            })}
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
              <Link to="/login" className="m-2">
                All ready have an account? Login.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewConfirmPassword;
