
import { DaysOptions } from "../../../constants";
import MenuItems from "../../nav/MenuItems";


const History = () => {
  const handelSelect=(selected)=>{
    alert(selected)
  }
  return (
    <div className="flex items-center border w-44 border-violet-600 rounded-md ">
      <div className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="size-8 text-violet-700"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75h4.5a.75.75 0 0 0 0-1.5h-3.75V6Z"
            clip-rule="evenodd"
          />
        </svg>
      </div>
      <div className="relative w-38 focus:ring-indigo-500 text-violet-600">
        <MenuItems options={DaysOptions} onSelect={handelSelect}/>
      </div>
    </div>
  );
};

export default History;
