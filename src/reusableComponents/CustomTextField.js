import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TEACHER } from "../redux/actions/Constants";
import { OnChange } from "../redux/actions/OnChange";

const CustomTextField = (props) => {
  const {
    label,
    inputType,
    value,
    name,
    options,
    option,
    errorMessage,
    patternError,
    radioFileds,
    pattern,
    input_radio,
    register,
    watch,
    errors,
    ...inputProps
  } = props;

  const values = useSelector((state) => state.teacher.prev_que);
  const currentIndex = useSelector((state) => state.teacher.currentIndex);
  const prev_Value = useSelector((state) => state.teacher.prev_Value);
  const subjectName = useSelector((state) => state.teacher.subjectName);
  const ONchnage = useSelector((state) => state.OnChangeReducer);
  const dispatch = useDispatch();

  const subjectValue = watch("subject");
  const handleBlur = () => {
    if (subjectValue) {
      document.getElementsByName("subject")[0].setAttribute("disabled", true);
    }
  };

  const prevValues = values[currentIndex] || {};
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("name :>> ", name);
    dispatch(OnChange(name, value));
    dispatch({ type: TEACHER.PREV_LOADING, payload: false });
  };

  const role = JSON.parse(localStorage.getItem("userType"));
  let disabled = false;
  if (role === "student") {
    disabled = true;
  }
  const renderSwitch = (inputType) => {
    switch (inputType) {
      case "input":
        return (
          <div className="mb-2">
            <input
              disabled={disabled}
              className={classNames("form-control shadow-sm", {
                "is-invalid": errors[name],
              })}
              onChange={handleChange}
              {...inputProps}
              {...register(name, {
                required: !disabled,
                pattern: pattern,
                onChange: handleChange,
                onBlur: handleBlur,
                validate: {
                  matchPassword: (value) => {
                    let watchedValue = watch("password");
                    if (name === "confirmPassword" && value !== watchedValue) {
                      return false;
                    }
                    return true;
                  },
                },
              })}
              defaultValue={
                name === "subject"
                  ? subjectName
                  : prev_Value
                  ? prevValues[name] ?? ONchnage[name]
                  : ONchnage[name] ?? ONchnage[name]
              }
            />
            {errors?.[name]?.type === "required" && (
              <p className="text-danger">{errorMessage}</p>
            )}
            {errors?.[name]?.type === "pattern" && (
              <p className="text-danger">{patternError}</p>
            )}
            {errors[name]?.type === "matchPassword" && (
              <p className="text-danger">Passwords do not match</p>
            )}
          </div>
        );
      case "radio_input":
        return (
          <>
            {option.map((item) => {
              const { errorMessage: optionErrorMessage, ...rest } = item;
              let optionDisabled = false;
              if (role === "teacher") {
                optionDisabled = true;
              }
              return (
                <div className="row mb-2" key={item.id}>
                  <div className="col-md-1 d-flex justify-content-center align-items-center">
                    <input
                      type="radio"
                      className="form-check-input m-0"
                      name="option"
                      disabled={optionDisabled}
                      value={item.name}
                      {...register("option", {
                        required: !optionDisabled,
                        onChange: handleChange,
                      })}
                      // checked={selectedOption === "option1"}
                      // onChange={handleOptionChange}
                    />
                    {errors?.option?.type === "required" && (
                      <p className="text-danger">{errorMessage}</p>
                    )}
                  </div>
                  <div className="col">
                    <input
                      disabled={role === "student" ? true : false}
                      className={classNames("form-control shadow-sm", {
                        "is-invalid": errors[item.name],
                      })}
                      {...rest}
                      {...register(item.name, {
                        required: !disabled && "This field is required",
                        onChange: handleChange,
                      })}
                      value={
                        prev_Value
                          ? prevValues[item.name] ?? ONchnage[item.name]
                          : ONchnage[item.name] ?? ""
                      }
                    />
                    {errors?.[item.name]?.type === "required" && (
                      <p className="text-danger">{optionErrorMessage}</p>
                    )}
                  </div>
                </div>
              );
            })}
          </>
        );

      case "select":
        return (
          <>
            <select
              className={classNames("form-select shadow-sm", {
                "is-invalid": errors[name],
              })}
              {...register(name, {
                required: true,
              })}
            >
              <option value="" disabled selected>
                ---Select Role----
              </option>
              {options.map((option) => {
                return (
                  <option key={option} value={option}>
                    {option}
                  </option>
                );
              })}
            </select>
            {errors?.[name]?.type === "required" && (
              <span className="text-danger">{errorMessage}</span>
            )}
          </>
        );
      default:
        return;
    }
  };
  return (
    <>
      {option ? (
        renderSwitch(inputType)
      ) : (
        <div className="row">
          <div className="col">{renderSwitch(inputType)}</div>
        </div>
      )}
    </>
  );
};

export default CustomTextField;
