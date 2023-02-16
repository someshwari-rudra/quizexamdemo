import { useJwt } from "react-jwt";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  const { decodedToken, isExpired } = useJwt(token);

  if (isExpired) {
    // return (
    //   <JwtRefresh
    //     token={token}
    //     onRefresh={(newToken) => {
    //     localStorage.setItem('token', newToken);
    //     }}
    //   />
    // );
  }
  console.log("called :>> ", "called");
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
