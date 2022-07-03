import { useRoutes } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Button from "./pages/ButtonsPage";
import ModalPage from "./pages/ModalPage";
import Input from "./pages/InputsPage";
import TabsPage from "./pages/TabsPage";
import SidebarPage from "./pages/SidebarPage";
import FootersPage from "./pages/FootersPage";
import AlertsPage from "./pages/AlertsPage";
import NavbarPage from "./pages/NavbarPage";
import PaginationPage from "./pages/PaginationPage";
import SpinnersPage from "./pages/SpinnersPage";
import CardsPage from "./pages/CardsPage";
import SelectsPage from "./pages/SelectsPage";

export default function Router() {
  const element = useRoutes([
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
        { path: "buttons", element: <Button /> },
        { path: "modal", element: <ModalPage /> },
        { path: "inputs", element: <Input /> },
        { path: "tabs", element: <TabsPage /> },
        { path: "sidebars", element: <SidebarPage /> },
        { path: "footers", element: <FootersPage /> },
        { path: "alerts", element: <AlertsPage /> },
        { path: "navbars", element: <NavbarPage /> },
        { path: "paginations", element: <PaginationPage /> },
        { path: "spinners", element: <SpinnersPage /> },
        { path: "cards", element: <CardsPage /> },
        { path: "selects", element: <SelectsPage /> },
        { path: "*", element: <Home /> },
      ],
    },
  ]);

  return element;
}
