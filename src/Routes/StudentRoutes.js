import PageNotFound from "../components/PageNotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import ListExam from "../screens/student/ListExam";
import SingleExam from "../screens/student/SingleExam";
import StudentProfile from "../screens/student/StudentProfile";

export const StudentRoutes = [
  {
    path: "/listExam",
    element: (
      <ProtectedRoute>
        <ListExam />
      </ProtectedRoute>
    ),
  },
  {
    path: "/listExam/:id",
    element: (
      <ProtectedRoute>
        <SingleExam />
      </ProtectedRoute>
    ),
  },
  {
    path: "/profile",
    element: (
      <ProtectedRoute>
        <StudentProfile />
      </ProtectedRoute>
    ),
  },
  {
    path: "/*",
    element: <PageNotFound />,
  },
];
