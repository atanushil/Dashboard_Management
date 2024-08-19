const MenuBtn = () => {
  const handelMenu = () => {
    alert("got click menu");
  };
  return (
    <button
      className="flex items-center gap-2 border px-2 py-2 rounded-md  sky-gradient-10 border-zinc   text-grey  hover:bg-sky-400 hover:text-slate-600 cursor-pointer whitespace-nowrap"
      onClick={handelMenu}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="size-5 rotate-90"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
    </button>
  );
};

export default MenuBtn;
