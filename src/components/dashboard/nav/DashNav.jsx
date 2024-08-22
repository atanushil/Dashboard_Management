
import {PersonalizeDashboard,MenuBtn,Refreshbtn,History} from '../../../utils'

const DashNav = ({ name }) => {
  return (
    <div className="flex pt-6 pb-4 sm:px-3 -pl-2 items-center ">
      <div className="w-full">
        <p className="sm:text-xl text-xl whitespace-wrap text-black font-medium font-sans">{name}</p>
      </div>
      <div className="flex justify-end sm:gap-3 gap-1">
        <PersonalizeDashboard />
        <Refreshbtn />
        <MenuBtn />
        <History />
      </div>
    </div>
  );
};

export default DashNav;
