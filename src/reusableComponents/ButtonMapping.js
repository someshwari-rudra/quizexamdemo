import React from "react";
import { Link } from "react-router-dom";
import CustomButton from "./CustomButton";

const ButtonMapping = ({ buttonAttributes, id, data, viewStudentResult }) => {
  return Array.isArray(buttonAttributes) ? (
    buttonAttributes.map(({ value, typeOf, onClick, ...rest }, index) => {
      switch (typeOf) {
        case "view":
          return (
            <Link to={`/ViewStudent/${id}`} key={index}>
              <CustomButton
                // onClick={() => onClick(id)}
                {...{ ...rest }}
              >
                {value}
              </CustomButton>
            </Link>
          );
        case "view_result":
          return (
            <CustomButton
              onClick={() => onClick(id)}
              {...{ ...rest }}
              key={index}
            >
              {value}
            </CustomButton>
          );
        case "prev":
          return (
            <CustomButton
              onClick={() => onClick()}
              {...{ ...rest }}
              key={index}
            >
              {value}
            </CustomButton>
          );
        case "changes":
          return (
            <CustomButton
              onClick={() => onClick()}
              {...{ ...rest }}
              key={index}
            >
              {value}
            </CustomButton>
          );
        case "skip":
          return (
            <CustomButton
              //onClick={() => onClick(id)}
              {...{ ...rest }}
              key={index}
            >
              {value}
            </CustomButton>
          );
        case "next":
          return (
            <CustomButton
              //onClick={() => onClick(id)}
              {...{ ...rest }}
              key={index}
            >
              {value}
            </CustomButton>
          );
        case "submit":
          return (
            <CustomButton
              onClick={() => onClick(data)}
              {...{ ...rest }}
              key={index}
            >
              {value}
            </CustomButton>
          );
        default:
          return (
            <CustomButton {...{ ...rest }} key={index}>
              {value}
            </CustomButton>
          );
      }
    })
  ) : (
    <CustomButton
      type={buttonAttributes.type}
      onClick={buttonAttributes.onClick}
    >
      {buttonAttributes.value}
    </CustomButton>
  );
};

export default ButtonMapping;
