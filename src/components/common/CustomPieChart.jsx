import  { useCallback, useState } from "react";
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

export default function CustomPieChart({ data }) {
  const PiechartSize = { innerRadius: 40, outerRadius: 50 };

  return (
    <div>
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
          <div key={index} className="flex-center w-full h-full p-0">
            <div className="relative flex flex-col items-center">
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
              <div className="absolute bottom-0 mb-2 text-center">
                <span>Total {total}</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
