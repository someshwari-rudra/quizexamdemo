import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import { StudentSidebarMenu } from "../../Data/StudentSidebarMenu";
import studentImage from "../../Assets/Images/StudentLogo.png"
import Navbar from "../../components/Navbar";
import { StudentRoutes } from "../../Routes/StudentRoutes";

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
            <Route path="/*" exact element={ <Navigate to="/listExam" />}></Route>
            {StudentRoutes.map((routes, index) => {
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

export default StudentDashboard;
