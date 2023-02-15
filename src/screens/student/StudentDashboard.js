import React from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { StudentSidebarMenu } from "../../Data/StudentSidebarMenu";
import StudentProfile from "./StudentProfile";
import studentImage from "../../Assets/Images/StudentLogo.png"
import Navbar from "../../components/Navbar";

const StudentDashboard = () => {
  return (
    <div>
      <Navbar image={studentImage} color={"#e1e1f7"} />
      <div className="main-sidebar">
        <div className="sidebar" style={{ background: "#e1e1f7" }}>
          <Sidebar items={StudentSidebarMenu} />
        </div>
        <div className="content">
          <Routes>
            <Route exact path="/All_exam" element={<StudentProfile />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
