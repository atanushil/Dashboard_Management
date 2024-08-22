const CustomStackBarChart = ({ text }) => {
  // Calculate total value
  const total = text.content.reduce((sum, item) => sum + item.num, 0);

  return (
    <div className="grid grid-cols-1 grid-rows-5 gap-1 widget">
      {/* Heading */}
      <div className="md:justify-start flex-center flex py-2 ">
        <p className="md:whitespace-nowrap truncate px-1">{text.heading}</p>
      </div>
      {/* Total and Bar */}
      <div className="flex flex-col gap-1">
        <div className="flex items-center">
          <p className="whitespace-nowrap mr-2">Total:</p>
          <span className="text-grey hover:text-slate-600">{total}</span>
        </div>
        <div className="relative w-full bg-gray-200 h-4 md:h-8 rounded-lg">
          {text.content.reduce((acc, item, i) => {
            const percentage = (item.num / total) * 100;

            acc.push(
              <div
                key={i}
                className="absolute top-0 h-full flex-center"
                style={{
                  backgroundColor: item.color,
                  width: `${percentage}%`,
                  left: `${acc.reduce(
                    (sum, segment) =>
                      sum + parseFloat(segment.props.style.width),
                    0
                  )}%`,
                }}
              >
                <p className="flex-center text-sm text-white whitespace-nowrap">
                  {Math.round(percentage)} %
                </p>
              </div>
            );
            return acc;
          }, [])}
        </div>
      </div>

      {/* List of items */}
      <div className="row-span-3">
        <ul className="flex-wrap flex-row flex-center gap-2 p-2">
          {text.content.map((item, i) => (
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
