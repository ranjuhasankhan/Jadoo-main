import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import Desitnations from "./pages/Desitnations";
import PublicRoute from "./route/PublicRoute";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import ProtectedRoute from "./route/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/auth",
    Component: ()=> {
      return (
        <PublicRoute>
          <AuthLayout />
        </PublicRoute>
      )
    },
    children: [
      {path: "login", Component: Login},
      {path: "signup", Component: Signup},
    ]
  },
  {
    path: "/",
    Component: ()=> {
      return (
        <ProtectedRoute>
          <MainLayout />
        </ProtectedRoute>
      )
    },
    children: [
      {index: true, Component: Home},
      {path: "about", Component: About},
      {path: "desitnations", Component: Desitnations},
    ]
  },

  {path: "*", Component: NotFound},
])

const App = () => <RouterProvider router={router} />

export default App
