import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { color, value, text } = payload[0];
    return (
      <div
        className="custom-tooltip"
        style={{
          padding: "10px",
          backgroundColor: "#fff",
          border: "1px solid #ddd",
          borderRadius: "4px",
          boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
        }}
      >
        <p className="label" style={{ margin: 0 }}>
          {label}: <span style={{ color }}>{value}</span>
        </p>
      </div>
    );
  }
  return null;
};

const CustomSplineChart = ({
  data = [],
  heading,
  type,
  BoxClass,
  categoryName,
}) => {
  const handelClick = () => {
    const url = `/widget/${heading}`;

    console.log(categoryName);
    console.log(heading);
    console.log(data);
    console.log(url);
  };
  return (
    <div
      className={`  ${BoxClass} flex flex-col justify-evenly gap-1`}
      style={{ width: "100%" }}
      onClick={handelClick}
    >
      <div className="py-2 flex-center md:justify-start px-1">
        <p className="md:justify-start flex w-fit items-center text-black justify-center">
          {heading}
        </p>
      </div>

      <ResponsiveContainer width="100%" height={"100%"}>
        <LineChart
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="text" />
          <YAxis type="number" dataKey="num" />
          <Tooltip content={<CustomTooltip type={type} />} />
          <Line
            type="monotone"
            dataKey="num"
            stroke="#8884d8"
            fill="#8884d8"
            dot={({ cx, cy, payload }) => (
              <circle
                cx={cx}
                cy={cy}
                r={3}
                fill={payload.color || "#8884d8"}
                stroke="none"
              />
            )}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomSplineChart;
