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

const CustomSplineChart = ({ data = [], heading }) => {
  return (
    <div
      style={{ width: "100%" }}
      className="widget  flex flex-col justify-evenly gap-1"
    >
      <div className="py-2  flex-center md:justify-start px-1">
        <p className="md:justify-start flex w-fit items-center justify-center">
          {heading}
        </p>
      </div>

      <ResponsiveContainer
        width="100%"
        height={180}
        style={{ display: "flex" }}
      >
        <LineChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomSplineChart;
