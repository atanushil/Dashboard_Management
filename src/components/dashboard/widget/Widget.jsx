import {CustomPieChart} from "../../../utils";

const Widget = ({ heading, text }) => {
  return (
    <div className="grid md:grid-cols-7 md:grid-rows-5 grid-cols-3 grid-rows-7 gap-1 widget ">

      {/* Heading */}
      <div className="md:col-span-7 col-span-3 flex-center md:justify-start">
        <p className="md:whitespace-nowrap truncate px-1">{heading}</p>
      </div>

      <div className="md:col-span-3 md:row-span-4 row-start-2 col-span-3 row-span-3 flex-center mb-8 caret-transparent">
        <CustomPieChart data={[text]} />  
      </div>

      <div className="md:col-span-4 md:row-span-4 md:col-start-4 md:row-start-2 col-span-3 row-span-3 row-start-5 bg-inherit ">
        <ul className="flex-wrap md:flex-nowrap md:flex-col md:gap-1 flex-center h-full caret-transparent">
          {text.content.map((item, i) => (
            <li
              key={i}
              className="flex items-center space-x-2 px-2 py-1 md:w-full w-fit"
            >
              <div
                className="w-2 h-2"
                style={{ backgroundColor: item.color, borderRadius: "50%" }}
              ></div>
              <span className="text-gray-800">{item.text}</span>
              <span style={{ color: item.color }}>({item.num})</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Widget;
