import { Aside } from "../Aside";
import { NavBar } from "../NavBar";
import { Outlet } from "react-router-dom";

export const Content = () => {
  return (
    <div className="w-screen flex">
      <Aside />
      <div className="w-5/6">
        <NavBar />
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}