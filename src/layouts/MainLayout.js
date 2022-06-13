import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function MainLayout() {
  return (
    <>
      <Navbar />
      <div className="my-6 w-screen flex justify-center">
        <div className="w-2/3 ">
          <Outlet />
        </div>
      </div>
    </>
  );
}
