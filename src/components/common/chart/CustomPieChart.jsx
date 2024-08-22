import { useCallback, useEffect, useState } from "react";
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

export default function CustomPieChart({ data, heading ,key}) {
  const PiechartSize = { innerRadius: 50, outerRadius: 60 };
  const content = data[0].content;
  return (
    <div className="grid md:grid-cols-7 md:grid-rows-5 grid-cols-3 grid-rows-7 gap-1 widget" key={key}>
      <div className="md:col-span-7 col-span-3 py-2  flex-center md:justify-start px-1 ">
        <p>{heading}</p>
      </div>
      <div className="md:col-span-3 md:row-span-4 row-start-2 col-span-3 row-span-3 flex-center mb-8 caret-transparent   h-full">
        {data.map((chart, index) => {
          const pieData = chart.content.map((item) => ({
            name: item.text,
            value: item.num,
            fill: item.color,
          }));

          // Calculate the total value
          const total = pieData.reduce((sum, entry) => sum + entry.value, 0);

          const [activeIndex, setActiveIndex] = useState(0);
          const onPieEnter = useCallback(
            (_, index) => {
              setActiveIndex(index);
            },
            [setActiveIndex]
          );

          return (
            <>
              <div key={index} className="flex-center w-full h-full p-0">
                <div className="relative flex flex-col items-center h-full   w-full  gap-2">
                  <div className="-top-10 md:-top-5 relative">
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
                        key={index}
                      />
                    </PieChart>
                  </div>
                  <div className="absolute md:bottom-0 left-0 md:w-full mb-2 text-center ">
                    <p>
                      Total{" "}
                      <span className="text-grey hover:text-slate-600">
                        {total}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <div className="md:col-span-4 md:row-span-4 md:col-start-4 md:row-start-2 col-span-3 row-span-3 row-start-5 bg-inherit">
        {
          <ul className="flex-wrap md:flex-nowrap md:flex-col md:gap-1 flex-center h-full caret-transparent">
            {content.map((item, i) => (
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
        }
      </div>
    </div>
  );
}
