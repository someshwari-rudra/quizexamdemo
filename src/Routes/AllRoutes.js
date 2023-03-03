import ForgetPassword from "../components/ForgetPassword";
import NewConfirmPassword from "../components/NewConfirmPassword";
import PageNotFound from "../components/PageNotFound";
import SignUp from "../components/SignUp";

export const AllRoutes = [
  {
    path: "/SignUp",
    exact: true,
    element: <SignUp />,
  },
  {
    path: "/forgetPassword",
    exact: true,
    element: <ForgetPassword />,
  },
  {
    path: "/newPassword",
    element: <NewConfirmPassword />,
  },

  {
    path: "/*",
    element: <PageNotFound />,
  },
];
