import PageNotFound from "../components/PageNotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import ListExam from "../screens/student/ListExam";
import ResetPasword from "../screens/student/ResetPasword";
import SingleExam from "../screens/student/SingleExam";
import Profile from "../screens/student/StudentProfile";
import UpadteProfile from "../screens/student/UpadteProfile";

export const StudentRoutes = [
  {
    path: "/listExam",
    exact: true,
    element: (
      <ProtectedRoute>
        <ListExam />
      </ProtectedRoute>
    ),
  },
  {
    path: "/listExam/:id",
    exact: true,
    element: (
      <ProtectedRoute>
        <SingleExam />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    exact: true,
    element: (
      <ProtectedRoute>
        <Profile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/updateProfile",
    exact: true,
    element: (
      <ProtectedRoute>
        <UpadteProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/resetPassword",
    exact: true,
    element: (
      <ProtectedRoute>
        <ResetPasword />
      </ProtectedRoute>
    ),
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];
