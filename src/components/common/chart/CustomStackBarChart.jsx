import React from 'react';

const CustomStackBarChart = ({ data, heading,BoxClass,categoryName }) => {
  // Calculate the total value from data
  const total = data.reduce((sum, item) => sum + item.num, 0);

  let accumulatedWidth = 0; // To track cumulative width of segments

  const handelClick = () => {
    const url = `/widget/${heading}`;

    console.log(categoryName);
    console.log(heading);
    console.log(data);
    console.log(url);
  };
  return (
    <div className={`grid grid-cols-1 grid-rows-5 gap-1  ${BoxClass} `} onClick={handelClick}>
      {/* Heading */}
      <div className="md:justify-start flex-center flex py-2">
        <p className="md:whitespace-nowrap truncate px-1">{heading}</p>
      </div>
      {/* Total and Bar */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center">
          <p className="whitespace-nowrap mr-2">Total:</p>
          <span className="text-grey hover:text-slate-600">{total}</span>
        </div>
        <div className="relative w-full bg-gray-200 h-4 rounded-lg">
          {data.map((item, i) => {
            const percentage = (item.num / total) * 100;
            const width = `${percentage}%`;

            const segmentStyle = {
              backgroundColor: item.color,
              width: width,
              left: `${accumulatedWidth}%`,
            };

            accumulatedWidth += percentage;

            return (
              <div
                key={i}
                className="absolute top-0 h-full flex items-center"
                style={segmentStyle}
              >
                <p className="flex-center w-full text-sm text-white whitespace-nowrap">
                  {Math.round(percentage)} %
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* List of items */}
      <div className="row-span-3">
        <ul className="flex-wrap flex-row flex-center gap-2 p-2">
          {data.map((item, i) => (
            <li key={i} className="flex items-center space-x-2 px-2 py-1">
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

export default CustomStackBarChart;
