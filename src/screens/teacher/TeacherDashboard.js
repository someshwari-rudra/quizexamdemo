import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import CustomNavbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import { teacherSidebarMenu } from "../../Data/teacherSidebarMenu";
import teacherPortal from "../../Assets/Images/School_portal.png";
import { TeacherRoutes } from "../../Routes/TeacherRoutes";

const TeacherDashboard = () => {
  return (
    <div>
      <CustomNavbar image={teacherPortal} color="#c0deff" />
      <div className="main-sidebar">
        <div className="sidebar" style={{ background: "#c0deff" }}>
          <Sidebar items={teacherSidebarMenu} color={"#c0deff"} />
        </div>
        <div className="content">
          <Routes>
            <Route path="/" element={<Navigate to="/ViewStudent" />}></Route>
            {TeacherRoutes.map((routes, index) => {
              const { path, exact, element: Comp } = routes;
              return (
                <Route path={path} exact={exact} element={Comp} key={index} />
              );
            })}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
