import ForgetPassword from "../components/ForgetPassword";
import Login from "../components/Login";
import PageNotFound from "../components/PageNotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import SignUp from "../components/SignUp";
import StudentDashboard from "../screens/student/StudentDashboard";
import TeacherDashboard from "../screens/teacher/TeacherDashboard";

export const AllRoutes = [
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/SignUp",
    element: <SignUp />,
  },
  {
    path: "/student/Dashboard",
    element: (
      <ProtectedRoute>
        <StudentDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/teacher/Dashboard",
    element: (
      <ProtectedRoute>
        <TeacherDashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/forgetPassowrd",
    element: (
      <ProtectedRoute>
        <ForgetPassword />
      </ProtectedRoute>
    ),
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];
