import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="my-6 mx-32">
        <Outlet />
      </div>
    </>
  );
}
