import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signUpFields } from "../Data/signUpFields";
import { UserSignUp } from "../redux/actions/auth";
import CustomTextField from "../reusableComponents/CustomTextField";


const SignUp = () => {
  const dispatch = useDispatch();
  const { userDetails } = useSelector((state) => state.signUp);
   const { loading } = useSelector((state) => state.signUp);
  console.log('userDetails :>> ', userDetails);
  console.log('loading :>> ', loading);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onsubmit = (data) => {
    delete data.confirmPassword;
    console.log(data);
    dispatch(UserSignUp(data));
  };

  return (
    <div>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="login_wrapper">
          <h1 className="signUp">SIGN UP</h1>
          {userDetails && (
            <div className={`alert alert-warning mt-3`} role="alert">
              {userDetails}
            </div>
          )}
          <form action="" onSubmit={handleSubmit(onsubmit)}>
            {signUpFields.map((currEle) => {
              const { id, ...inputFieldData } = currEle;
              return (
                <CustomTextField
                  key={id}
                  {...inputFieldData}
                  register={register}
                  watch={watch}
                  errors={errors}
                />
              );
            })}
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

export default SignUp;
