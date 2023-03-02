import { Navigate, useNavigate } from "react-router-dom";
// import { decodeToken, isExpired } from "react-jwt";
import { isExpired } from "react-jwt";

const ProtectedRoute = ({ children }) => {

  const navigate  = useNavigate()
  function hasJWt() {
    let flag = false;
    const token = JSON.parse(localStorage.getItem("token"));
    token ? (flag = true) : (flag = false);
    console.log("isExpired(decodedToken) :>> ", isExpired(token));
    if (isExpired(token)) {
      flag = false;
      localStorage.clear()
      navigate("/")
    } else {
      flag = true;
    }
    return flag;
  }
  const authed = hasJWt();

  return authed ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
