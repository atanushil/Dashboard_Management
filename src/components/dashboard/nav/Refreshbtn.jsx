const Refreshbtn = () => {
  const handelRefresh = () => {
    alert("got click refresh btn");
  };
  return (
    <button
      className="flex items-center gap-2  border p-2 rounded-md  sky-gradient-10 border-zinc   text-grey  hover:bg-sky-400 hover:text-slate-600 cursor-pointer whitespace-nowrap"
      onClick={handelRefresh}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="sm:size-6 size-4 rotate-90"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99"
        />
      </svg>
    </button>
  );
};

export default Refreshbtn;
