import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import { AllRoutes } from "./Routes/AllRoutes";
import Student from "./screens/student";
import Teacher from "./screens/teacher";

function App() {
  const { userDetails } = useSelector((state) => state.Auth);
  const userType = JSON.parse(localStorage.getItem("userType"));
  const token = JSON.parse(localStorage.getItem("token"));

  const ContentView = () => {
  
    if (userDetails || token) {
      if (userType === "student") return <Route path="/" element={<Student />} />;
      if (userType === "teacher") return <Route path="/" element={<Teacher />} />;
    }
    return <Route path="/" element={<Login />} />;
  };
  return (
    <>
      <BrowserRouter>
        <Routes>
          {ContentView()}
          {AllRoutes.map((routes, index) => {
            const { path, exact, element: Comp } = routes;
            return (
              <Route path={path} exact={exact} element={Comp} key={index} />
            );
          })}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
