import React, { useState } from 'react'
  import { useForm } from 'react-hook-form';
  // import { useSelector } from 'react-redux';
import CustomTextField from '../reusableComponents/CustomTextField';

const ForgetPassword = () => {
      const [submit, setSubmit] = useState("Submit");
      const [disable, setDisable] = React.useState(false);
    // const userData = useSelector((state) => state.loginReducer);
    const ForgetPasswordField = [
      {
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
      },
    ];
      const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm();

      const onsubmit = (data) => {
        console.log(data);
        setSubmit("Submitting");
        setDisable(true);
        // dispatch(loginUser(data));
        // setTimeout(() => {
        //   setSubmit("submit");
        //   setDisable(false);
        // }, 2000);
      };
    
  return (
    <div>
      <div className="container vh-100 d-flex justify-content-center align-items-center">
        <div className="login_wrapper">
          <h1 className="signUp">Forget Password</h1>
          {/* {userData?.data.message && (
            <div className={`alert alert-danger mt-3`} role="alert">
              {userData?.data.message}
            </div>
          )} */}
          <form action="" onSubmit={handleSubmit(onsubmit)}>
            {ForgetPasswordField.map((currEle) => {
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
                disabled={disable}
                className="btn btn-primary mt-3"
              >
                {submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword