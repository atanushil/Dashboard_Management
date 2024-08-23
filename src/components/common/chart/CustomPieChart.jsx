import { useCallback, useState } from "react";
import { PieChart, Pie, Sector } from "recharts";

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
    payload,
    percent,
  } = props;
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);

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

export default function CustomPieChart({ data, heading }) {
  const PiechartSize = { innerRadius: 50, outerRadius: 60 };

  const pieData = data.map((item) => ({
    name: item.text,
    value: item.num,
    fill: item.color,
  }));
  const total = pieData.reduce((sum, element) => sum + element.value, 0);

  const [activeIndex, setActiveIndex] = useState(0);
  const onPieEnter = useCallback(
    (_, index) => {
      setActiveIndex(index);
    },
    [setActiveIndex]
  );

  return (
    <div className="grid md:grid-cols-7 md:grid-rows-5 grid-cols-3 grid-rows-7 gap-1 widget">
      <div className="md:col-span-7 col-span-3 py-2 flex-center md:justify-start px-1">
        <p>{heading}</p>
      </div>
      <div className="md:col-span-3 md:row-span-4 row-start-2 col-span-3 row-span-3 flex-center mb-8 caret-transparent h-full">
        <div className="relative flex flex-col items-center justify-center h-full w-full gap-2">
          <div className="-top-2 md:-top-7 relative">
            <PieChart width={200} height={200}>
              <Pie
                data={pieData}
                cx={100}
                cy={100}
                innerRadius={PiechartSize.innerRadius}
                outerRadius={PiechartSize.outerRadius}
                fill="#8884d8"
                dataKey="value"
                onMouseEnter={onPieEnter}
                activeIndex={activeIndex}
                activeShape={renderActiveShape}
              />
            </PieChart>
          </div>
          <div className="absolute md:bottom-0 md:left-0 text-center left-6  md:w-full md:mb-2 mb-0 bottom-0">
            <p>
              Total{" "}
              <span className="text-grey hover:text-slate-600">{total}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="md:col-span-4 md:row-span-4 md:col-start-4 md:row-start-2 col-span-3 row-span-3 row-start-5 bg-inherit">
        <ul className="flex-wrap md:flex-nowrap md:flex-col md:gap-1 flex-center h-full caret-transparent">
          {data.map((item, i) => (
            <li
              key={item.text} // Use a unique and stable key, like item.text
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
}
