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
    getValues,
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

  const handleMouseOver = () => {
    console.log("runned :>> ", "runned");
    if (subjectValue) {
      document.getElementsByName("subject")[0].disabled = false;
    }
  };

  const prevValues = values[currentIndex] || {};

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
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
                onmouseenter: handleMouseOver,
                shouldValidate: name === "notes",
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
              value={
                name === "subject"
                  ? subjectName ?? ONchnage[name]
                  : prev_Value
                  ? prevValues[name] ?? ONchnage[name]
                  : ONchnage[name] ?? ""
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
                        required: !disabled,
                        onChange: handleChange,
                        validate: {
                          uniqueOptions: (value) => {
                            const options = [
                              "Option1",
                              "Option2",
                              "Option3",
                              "Option4",
                            ];
                            const values = options.map(
                              (option) => getValues()[option]
                            );
                            const uniqueValues = new Set(
                              values.filter((v) => v !== "")
                            );
                            if (uniqueValues.size !== values.length) {
                              const duplicateOption = options.find(
                                (option) =>
                                  values.filter(
                                    (v) => v === getValues()[option]
                                  ).length > 1
                              );
                              return `${item.name} and ${duplicateOption} cannot have the same value`;
                            }
                          },
                          // OptionValidation: (value) => {
                          //   console.log("value", value);
                          //   if (name === "Option1") {
                          //     return (
                          //       value === getValues().Option2 &&
                          //       getValues().Option3 &&
                          //       getValues().Option4
                          //     );
                          //   }
                          //   if (name === "Option2") {
                          //     return (
                          //       value === getValues().Option1 &&
                          //       getValues().Option3 &&
                          //       getValues().Option4
                          //     );
                          //   }
                          //   // if (
                          //   //   value === getValues().Option1 &&
                          //   //   getValues().Option2 &&
                          //   //   getValues().Option3 &&
                          //   //   getValues().Option4
                          //   // ) {
                          //   //   return false;
                          //   // } else {
                          //   //   return true;
                          //   // }
                          // },
                        },
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
                    {errors?.[item.name] && (
                      <div className="text-danger">
                        {errors[item.name].message}
                      </div>
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
      ) : label ? (
        <div className="row d-flex d-flex justify-content-center align-items-center">
          <div className="col-1">{label && <label>{label}</label>}</div>
          <div className="col-11">{renderSwitch(inputType)}</div>
        </div>
      ) : (
        <div className="row">
          <div className="col">{renderSwitch(inputType)}</div>
        </div>
      )}
    </>
  );
};

export default CustomTextField;
