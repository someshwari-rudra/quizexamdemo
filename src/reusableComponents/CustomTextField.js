import classNames from "classnames";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TEACHER } from "../redux/actions/Constants";
import { OnChange } from "../redux/actions/OnChange";
import { saveOnChange } from "../redux/actions/Teacher";

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
    radioField,
    pattern,
    input_radio,
    register,
    watch,
    getValues,
    setValue,
    errors,
    ...inputProps
  } = props;

  const values = useSelector((state) => state.teacher.prev_que);
  const currentIndex = useSelector((state) => state.teacher.currentIndex);
  const show_prev_Value = useSelector((state) => state.teacher.prev_Value);
  const subjectName = useSelector((state) => state.teacher.subjectName);
  const ONchnage = useSelector((state) => state.OnChangeReducer);

  const allOptions = {
    Option1: ONchnage.Option1,
    Option2: ONchnage.Option2,
    Option3: ONchnage.Option3,
    Option4: ONchnage.Option4,
  };

  const dispatch = useDispatch();

  const prevValues = values[currentIndex] || {};

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(OnChange(name, value));
    dispatch({ type: TEACHER.PREV_LOADING, payload: false });
    dispatch(saveOnChange(false));
  };

  const role = JSON.parse(localStorage.getItem("userType"));
  let disabled = false;
  if (role === "student") {
    disabled = true;
  }
  const selectedOption = getValues()?.option;
  const answer = getValues()?.[selectedOption];
  useEffect(() => {
    setValue("answer", answer);
  }, [answer, setValue]);

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
                validate: {
                  matchPassword: (value) => {
                    let watchedValue = watch("password");
                    if (name === "confirmPassword" && value !== watchedValue) {
                      return false;
                    }
                    return true;
                  },
                  OptionValidation: (value) => {
                    const isDuplicateOption =
                      Object.values(allOptions).filter((v) => v === value)
                        .length > 1;
                    return !isDuplicateOption;
                  },
                },
              })}
              value={
                name === "subject"
                  ? subjectName ?? ONchnage[name]
                  : name === "answer"
                  ? answer ?? ""
                  : show_prev_Value
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
            {errors?.[name]?.type === "OptionValidation" && (
              <p className="text-danger">Options can't be repeated..!</p>
            )}
          </div>
        );

      case "radio":
        return (
          <div className="d-flex">
            <input
              type="radio"
              value={value}
              {...radioField}
              className="form-check-input shadow-sm"
              {...register(name, {
                required: !disabled,
                onChange: handleChange,
              })}
            />
            {errors?.[name]?.type === "OptionValidation" && (
              <p className="text-danger">Select any one Option..!</p>
            )}
          </div>
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
      {label ? (
        <div className="row d-flex d-flex justify-content-center align-items-center">
          <div className="col-1">{label && <label>{label}</label>}</div>
          <div className="col-11">{renderSwitch(inputType)}</div>
        </div>
      ) : radioField ? (
        <div className="row d-flex d-flex justify-content-center align-items-center">
          <div className="col-1">
            <CustomTextField
              {...radioField}
              register={register}
              errors={errors}
              getValues={getValues}
              setValue={setValue}
              answer={answer}
            />
          </div>
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
