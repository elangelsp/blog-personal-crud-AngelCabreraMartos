import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import DashboardPage from "../pages/DashboardPage";
import ProtectedRoute from "../components/ProtectedRoute";
import PostDetailPage from "../pages/PostDetailPage";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/", 
        element: <HomePage />,
      },
      {
        path: "/login", 
        element: <LoginPage />,
      },
      {
        path: "/register", 
        element: <RegisterPage />,
      },
      {
        path: "/dashboard",
        element: (
        <ProtectedRoute>
          <DashboardPage />
        </ProtectedRoute>
      ),
      },
      {
        path: "/posts/:id",
        element: <PostDetailPage />,
      }
    ],
  },
]);
