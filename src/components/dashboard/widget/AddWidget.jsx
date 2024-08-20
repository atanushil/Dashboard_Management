import React from "react";

const AddWidget = () => {
  const handelClick=()=>{
    alert("make widget")
  }
  return (
    <div className="widget flex-center cursor-pointer" onClick={handelClick}>
      <button className="flex items-center gap-3 border px-3 py-2 rounded-md sky-gradient-10 border-zinc text-grey hover:bg-sky-400 hover:text-slate-600 cursor-pointer whitespace-nowrap focus:shadow-lg">
        <p className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          <span>Add Widget</span>
        </p>
      </button>
    </div>
  );
};

export default AddWidget;