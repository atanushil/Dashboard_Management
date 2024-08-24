import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PieChart, Pie, Sector } from "recharts";
import NotFound from "../NotFound";

const renderActiveShape = (props) => {
  const RADIAN = Math.PI / 180;
  const {
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    startAngle,
    endAngle,
    fill,
    percent,
  } = props;

  return (
    <g>
      <text x={cx} y={cy} dy={4} textAnchor="middle" fill={fill} fontSize={18}>
        {`${(percent * 100).toFixed(2)}%`}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
    </g>
  );
};

export default function CustomPieChart({
  data,
  heading,
  BoxClass,
  PieSize,
  categoryName,
}) {
  const navigate = useNavigate();

  const pieData =
    data?.map((item) => ({
      name: item.text,
      value: item.num,
      fill: item.color,
    })) || [];

  const total = pieData.reduce((sum, element) => sum + element.value, 0);

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback((_, index) => {
    setActiveIndex(index);
  }, []);

  const handleClick = () => {
    const url = `/widget/${categoryName}/${heading}`;
    navigate(url, {
      state: {
        specificWidget: { heading, data, chart: "PieChart" },
        categoryName,
      },
    });
  };

  return (
    <div
      className={`grid md:grid-cols-7 md:grid-rows-10 grid-cols-3 grid-rows-8 gap-1 rounded-lg h-full border ${BoxClass}`}
      onClick={handleClick}
    >
      <div className="md:col-span-7 col-span-3  py-4  flex-center md:justify-start px-2 text-black">
        <p className="">{heading}</p>
      </div>
      {data?.length ? (
        <>
          <div className="md:col-span-3 md:row-span-9 row-start-2 col-span-3 row-span-4 flex-center mb-4 caret-transparent h-full">
            <div className="relative flex flex-col items-center justify-center h-full w-full gap-2">
              <div className="-top-2 relative">
                <PieChart width={PieSize.width} height={PieSize.height}>
                  <Pie
                    data={pieData}
                    cx={PieSize.CX}
                    cy={PieSize.CY}
                    innerRadius={PieSize.innerRadius}
                    outerRadius={PieSize.outerRadius}
                    fill="#8884d8"
                    dataKey="value"
                    onMouseEnter={onPieEnter}
                    activeIndex={activeIndex}
                    activeShape={renderActiveShape}
                  />
                </PieChart>
              </div>
              <div className="absolute md:left-0 text-center left-0 md:w-full md:mb-2 mb-0 top-2">
                <p>
                  Total{" "}
                  <span className="text-grey hover:text-slate-600">
                    {total}
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-4 relative  h-full md:row-span-9 md:col-start-4 md:row-start-2 col-span-3 row-span-3 row-start-6 bg-inherit">
            <ul className="flex-wrap md:flex-nowrap md:flex-col md:gap-1 flex-center md:justify-evenly h-full caret-transparent">
              {data.map((item) => (
                <li
                  key={item.text}
                  className="flex items-center  px-2 py-1 gap-2 md:w-full w-fit"
                >
                  <div
                    className="w-2 h-2"
                    style={{
                      backgroundColor: item.color,
                      borderRadius: "50%",
                    }}
                  ></div>
                  <span className="text-gray-800">{item.text}</span>
                  <span style={{ color: item.color }}>({item.num})</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <div className="md:col-span-7  row-start-2 pt-6 md:row-span-9 col-span-7 row-span-7 flex-center  caret-transparent h-full">
          <NotFound message="No Graph data available"  color={"text-orange-500 font-bold"}/>
        </div>
      )}
    </div>
  );
}
