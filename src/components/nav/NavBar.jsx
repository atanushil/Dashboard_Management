
import { people } from "../../constants";
import MenuItems from "./MenuItems";
import SearchBar from "./SearchBar";
import Notification from "./Notification";
import Profile from "./Profile";

const NavBar = ({ state, user }) => {

  return (
    <div className="flex items-center p-2 bg-slate-50 shadow-lg">
      <div className="p-1  w-full">{state}</div>
      <div className="flex items-center h-full w-full justify-end gap-2">
        <SearchBar />
        <MenuItems menuItems={people} />
        <Notification status={false}/>
        <Profile user={user}/>
      </div>
    </div>
  );
};

export default NavBar;
