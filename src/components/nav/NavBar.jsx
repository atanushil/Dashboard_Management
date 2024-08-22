import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPath } from "../../routingSlice";
import { navBarOptions } from "../../constants";
import { MenuItems,Profile,SearchBar,Notification } from "../../utils";


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
      <div className="p-1 w-full flex items-center">
        <div
          onClick={() => handleSelection("Home")}
          className={`cursor-pointer  ${
            currentPath === "/" ? "text-blue-800 font-bold sm:text-xl text-md" : "text-grey"
          }`}
        >
          Home
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="sm:size-6 size-5 text-grey"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
        <div
          onClick={() => handleSelection("Dashboard")}
          className={`cursor-pointer  whitespace-nowrap ${
            currentPath === "/dashboard" ? "text-blue-800 font-bold sm:text-xl text-md " : "text-grey"
          }`}
        >
          Dashboard V2
        </div>
      </div>

      <div className="flex items-center h-full w-full justify-end gap-2">
        {currentPath === "/" ? null : (
          <>
            <SearchBar />
            <div className="relative sm:block py-1.5 hidden lg:w-2/5 md:w-2/5 sm:w-3/5 2xl:w-1/4 border-border_color border rounded-lg bg-white">
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
