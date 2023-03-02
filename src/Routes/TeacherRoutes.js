import PageNotFound from "../components/PageNotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import CreateExam from "../screens/teacher/CreateExam";
import EditSingleExam from "../screens/teacher/EditSingleExam";
import VerifyExam from "../screens/teacher/VerifyExam";
import ViewExam from "../screens/teacher/ViewExam";
import ViewSingleStudent from "../screens/teacher/ViewSingleStudent";
import ViewStudents from "../screens/teacher/ViewStudents";

export const TeacherRoutes = [
  {
    path: "/ViewStudent",
    exact: true,
    element: (
      <ProtectedRoute>
        <ViewStudents />
      </ProtectedRoute>
    ),
  },
  {
    path: "/ViewStudent/:id",
    exact: true,
    element: (
      <ProtectedRoute>
        <ViewSingleStudent />
      </ProtectedRoute>
    ),
  },
  {
    path: "/createExam",
    exact: true,
    element: (
      <ProtectedRoute>
        <CreateExam />
      </ProtectedRoute>
    ),
  },
  {
    path: "/ViewExams",
    exact: true,
    element: (
      <ProtectedRoute>
        <ViewExam />
      </ProtectedRoute>
    ),
  },
  {
    path: "/ViewExams/:id",
    exact: true,
    element: (
      <ProtectedRoute>
        <EditSingleExam />
      </ProtectedRoute>
    ),
  },
  {
    path: "/verifyExam",
    exact: true,
    element: (
      <ProtectedRoute>
        <VerifyExam />
      </ProtectedRoute>
    ),
  },

  {
    path: "/*",
    element: <PageNotFound />,
  },
];
