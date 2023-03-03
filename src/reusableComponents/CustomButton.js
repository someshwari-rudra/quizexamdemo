import React from "react";
import { useSelector } from "react-redux";

const CustomButton = ({ children, ...otherProps }) => {
   const loading = useSelector((state) => state.teacher.loading);
  return (
    <button className="btn button me-2" {...otherProps}>
     
      {children}
    </button>
  );
};

export default CustomButton;
