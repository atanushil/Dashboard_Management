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
import { useNavigate } from "react-router-dom";
import NotFound from "../NotFound";

const CustomSplineChart = ({
  data = [],
  heading,
  type,
  BoxClass,
  categoryName,
}) => {
  const navigate = useNavigate();

  const handelClick = () => {
    const url = `/widget/${categoryName}/${heading}`;
    navigate(url, {
      state: {
        specificWidget: { heading, data, chart: "SplineChart" },
        categoryName,
      },
    });
  };
  return (
    <div
      className={`  ${BoxClass} grid grid-cols-5 grid-rows-5 gap-2`}
      style={{ width: "100%" }}
      onClick={handelClick}
    >
      <div className="col-span-5 md:justify-start flex px-3  items-center  text-black justify-center">
        <p className="">
          {heading}
        </p>
      </div>
      {data?.length ? (
        <div className="col-span-5 row-span-4 row-start-2">
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
      ):
      <div className="col-span-5 row-span-4 row-start-2">
          <NotFound message="No Graph data available" color={"text-orange-500 font-bold"} />
        </div>}
    </div>
  );
};

export default CustomSplineChart;
