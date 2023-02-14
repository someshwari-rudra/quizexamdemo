import classNames from "classnames";
import React from "react";

const CustomTextField = (props) => {
  const {
    label,
    inputType,
    value,
    name,
    options,
    errorMessage,
    patternError,
    pattern,
    register,
    watch,
    errors,
    ...inputProps
  } = props;

  const renderSwitch = (inputType) => {
    switch (inputType) {
      case "input":
        return (
          <div className="mb-2">
            <input
              className={classNames("form-control shadow-sm", {
                "is-invalid": errors[name],
              })}
              {...inputProps}
              {...register(name, {
                required: true,
                pattern: pattern,
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
    <div className="row">
      <div className="col">{renderSwitch(inputType)}</div>
    </div>
  );
};

export default CustomTextField;
