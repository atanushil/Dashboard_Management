import { navBarOptions } from "../../constants";
import {MenuItems} from "../../utils";
import SearchBar from "./SearchBar";
import Notification from "./Notification";
import Profile from "./Profile";

const NavBar = ({ state, user }) => {
  const handelSelection=(selected)=>{
    alert(selected)
  }
  return (
    <div className="flex items-center p-2 bg-slate-50 shadow-lg sticky top-0 z-10">
      <div className="p-1  w-full">{state}</div>
      <div className="flex items-center h-full w-full justify-end gap-2">
        <SearchBar />
        <div className="relative lg:w-2/5 md:w-2/5 sm:w-3/5 2xl:w-1/4  border-border_color border rounded-lg bg-white  ">
          <MenuItems options={navBarOptions} onSelect={handelSelection} />
        </div>
        <Notification status={false} />
        <Profile user={user} />
      </div>
    </div>
  );
};

export default NavBar;
