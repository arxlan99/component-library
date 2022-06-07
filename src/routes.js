import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Button from "./pages/Button";
import Modal from "./pages/Modal";


export default function Router() {
  let element = useRoutes([
    {
      element: <AuthLayout />,
      children: [
        { path: "login", element: <Login /> },
        { path: "signup", element: <SignUp /> },
      ],
    },
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "home", element: <Home /> },
        { path: "about", element: <About /> },
        { path: "button", element: <Button /> },
        { path: "modal", element: <Modal /> },
      ],
    },
  ]);

  return element;
}
