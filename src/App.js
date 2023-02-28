import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { AllRoutes } from "./Routes/AllRoutes";
import StudentDashboard from "./screens/student/StudentDashboard";
import TeacherDashboard from "./screens/teacher/TeacherDashboard";

function App() {
  const { userDetails } = useSelector((state) => state.Auth);
  const userType = JSON.parse(localStorage.getItem("userType"));
  const token = JSON.parse(localStorage.getItem("token"));

    const ContentView = () => {
      if (userDetails || token) {
        if (userType === "student")
          return <Route path="/*" exact element={<StudentDashboard />} />;
        if (userType === "teacher")
          return <Route path="/*" exact element={<TeacherDashboard />} />;
      }
      return <Route path="/*" exact element={<Login />} />;
    };
  return (
    <>
      <Routes>
          {ContentView()}
          {AllRoutes.map((routes, index) => {
            const { path, exact, element: Comp } = routes;
            return (
              <Route path={path} exact={exact} element={Comp} key={index} />
            );
          })}
      </Routes>
    </>
  );
}

export default App;
