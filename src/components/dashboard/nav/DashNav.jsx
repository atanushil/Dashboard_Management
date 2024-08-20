import React from "react";
import {PersonalizeDashboard,MenuBtn,Refreshbtn,History} from '../../../utils'

const DashNav = ({ name }) => {
  return (
    <div className="flex pt-6 pb-4 px-3 items-center ">
      <div className="w-full">
        <p className="text-xl text-black font-medium font-sans">{name}</p>
      </div>
      <div className="flex justify-end gap-3">
        <PersonalizeDashboard />
        <Refreshbtn />
        <MenuBtn />
        <History />
      </div>
    </div>
  );
};

export default DashNav;
