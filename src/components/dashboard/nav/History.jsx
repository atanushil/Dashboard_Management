
import { DaysOptions } from "../../../constants";
import {MenuItems} from "../../../utils";


const History = () => {
  const handelSelect=(selected)=>{
    alert(selected)
  }
  return (
    <div className="flex items-center border sm:w-44 w-24 px-1 border-violet-300 hover:border-violet-600 rounded-md hover:text-violet-600 text-violet-300 ">
      <div className="sm:block hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="sm:size-8 size-6 "
        >
          <path
            fillRule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <div className="relative  focus:ring-indigo-500 ">
        <MenuItems options={DaysOptions} onSelect={handelSelect}/>
      </div>
    </div>
  );
};

export default History;
