import React from "react";
import {Link } from "react-router-dom";

const Teacher = () => {
  return (
    <>
      <h1>teacher</h1>
      <Link to="/createExam">Create Exam</Link>
    </>
  );
};

export default Teacher;
