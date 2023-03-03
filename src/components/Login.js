import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LoginFields } from "../Data/LoginFields";
import { userLogin } from "../redux/actions/auth";
import { OnChange } from "../redux/actions/OnChange";
import CustomTextField from "../reusableComponents/CustomTextField";

const Login = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.Auth);
  console.log("userDetails :>> ", userDetails);
  const { loading } = useSelector((state) => state.Auth);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
    setValue,
    reset,
  } = useForm();

  const onsubmit = (data) => {
    console.log(data);
    reset();
    const properties = Object.keys(data);
    properties.map((item) => {
      return dispatch(OnChange(item, ""));
    });
    dispatch(userLogin(data));
  };

  return (
    <div>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="login_wrapper">
          <h1 className="signUp">LOGIN</h1>
          {userDetails && (
            <div className={`alert alert-danger mt-3`} role="alert">
              {userDetails}
            </div>
          )}
          <form action="" onSubmit={handleSubmit(onsubmit)}>
            {LoginFields.map((currEle) => {
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
            <div className="d-flex flex-column justify-content-end align-items-end">
              <Link to="/forgetPassword">
                <p className="">Forgot Password</p>
              </Link>
            </div>
            <div className="d-flex flex-column justify-content-center align-items-center">
              <button
                type="submit"
                disabled={loading}
                className="btn btn-primary mt-3"
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
              <Link to="/signUp" className="m-2">
                Don't have an account? Sign Up.
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
