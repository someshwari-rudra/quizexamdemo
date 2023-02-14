import { Navigate } from "react-router-dom";


const ProtectedRoute = ({ children }) => {
  console.log('called :>> ', "called");
    function hasJWt() {
      let flag = false;
      localStorage.getItem("token") ? (flag = true) : (flag = false);
      // localStorage.getItem("token") ? (flag = true) : (flag = false);
      return flag;
    }
  const authed = hasJWt();

  return authed ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;  