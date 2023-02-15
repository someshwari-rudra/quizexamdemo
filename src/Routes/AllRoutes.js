import ForgetPassword from "../components/ForgetPassword";
import PageNotFound from "../components/PageNotFound";
import SignUp from "../components/SignUp";

export const AllRoutes = [
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/forgetPassword",
    element: (
        <ForgetPassword />
    ),
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];
