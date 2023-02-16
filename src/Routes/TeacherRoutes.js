import PageNotFound from "../components/PageNotFound";
import ProtectedRoute from "../components/ProtectedRoute";
import CreateExam from "../screens/teacher/CreateExam";
import VerifyExam from "../screens/teacher/VerifyExam";
import ViewExam from "../screens/teacher/ViewExam";
import ViewSingleStudent from "../screens/teacher/ViewSingleStudent";
import ViewStudents from "../screens/teacher/ViewStudents";

export const TeacherRoutes = [
  {
    path: "/ViewStudent",
    element: (
      <ProtectedRoute>
        <ViewStudents />
      </ProtectedRoute>
    ),
  },
  {
    path: "/ViewStudent/:id",
    element: (
      <ProtectedRoute>
        <ViewSingleStudent />
      </ProtectedRoute>
    ),
  },
  {
    path: "/createExam",
    element: (
      <ProtectedRoute>
        <CreateExam />
      </ProtectedRoute>
    ),
  },
  {
    path: "/ViewExams",
    element: (
      <ProtectedRoute>
        <ViewExam />
      </ProtectedRoute>
    ),
  },
  {
    path: "/verifyExam",
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
