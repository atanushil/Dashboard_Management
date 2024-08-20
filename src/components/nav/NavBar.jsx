import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPath } from "../../routingSlice";
import { navBarOptions } from "../../constants";
import { MenuItems } from "../../utils";
import SearchBar from "./SearchBar";
import Notification from "./Notification";
import Profile from "./Profile";
import { useState } from "react";

const NavBar = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentPath = useSelector((state) => state.routing.currentPath);

  const handleSelection = (selected) => {
    let path = "/";
    switch (selected) {
      case "Home":
        path = "/";
        break;
      case "Dashboard":
        path = "/dashboard";
        break;
      default:
        alert(`No route for ${selected}`);
        return;
    }
    navigate(path);
    dispatch(setCurrentPath(path));
  };

  return (
    <div className="flex items-center p-2 px-4 bg-slate-50 shadow-lg sticky top-0 z-10">
      <div className="p-1 w-full flex gap-2">
        <div
          onClick={() => handleSelection("Home")}
          className={`cursor-pointer ${currentPath === "/" ? "text-red-500" : ""}`}
        >
          Home
        </div>
        <div
          onClick={() => handleSelection("Dashboard")}
          className={`cursor-pointer ${currentPath === "/dashboard" ? "text-red-500" : ""}`}
        >
          Dashboard
        </div>
      </div>

      <div className="flex items-center h-full w-full justify-end gap-2">
        {currentPath === "/" ? null : (
          <>
            <SearchBar />
            <div className="relative lg:w-2/5 md:w-2/5 sm:w-3/5 2xl:w-1/4 border-border_color border rounded-lg bg-white">
              <MenuItems options={navBarOptions} />
            </div>
          </>
        )}
        <Notification status={false} />
        <Profile user={user} />
      </div>
    </div>
  );
};

export default NavBar;
