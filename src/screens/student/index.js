import React from "react";
import { Route, Routes } from "react-router-dom";
import StudentDashboard from "./StudentDashboard";

const Student = () => {
  return (
    <Routes>
      <Route index element={<StudentDashboard />} />
    </Routes>
  );
};

export default Student;
