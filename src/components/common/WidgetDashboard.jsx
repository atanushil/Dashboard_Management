import React from "react";
import { BigSizePie, categoryList, SmallSizePie } from "../../constants";
import {
  CustomPieChart,
  CustomSplineChart,
  CustomStackBarChart,
} from "../../utils";

const WidgetDashboard = ({ specificWidget, categoryName }) => {

  // Function to render the appropriate chart based on widget type
  const renderChart = (widget) => {
    if (!widget) return null;

    switch (widget.chart) {
      case "PieChart":
        return (
          <CustomPieChart
            PieSize={BigSizePie}
            BoxClass={"w-full bg-white mb-4 mx-4 p-4 text-black"}
            data={widget.data}
            heading={widget.heading}
            key={widget.id} // Key prop should be applied here
          />
        );
      case "SplineChart":
        return (
          <CustomSplineChart
            BoxClass={"w-full bg-white mx-4 rounded-lg h-full text-black"}
            data={widget.data}
            heading={widget.heading}
            key={widget.id} // Key prop should be applied here
          />
        );
      case "StackBarChart":
        return (
          <CustomStackBarChart
            BoxClass={"w-full h-full bg-white px-4 mx-4 text-black rounded-lg"}
            data={widget.data}
            heading={widget.heading}
            key={widget.id} // Key prop should be applied here
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-5 grid-rows-8 gap-4 sm:h-[76vh] h-[77vh] m-4 uppercase text-white">
      <div className="col-span-5 flex-center mx-4 px-4 rounded-lg lg:justify-start bg-white text-black text-2xl whitespace-nowrap">
        {categoryName}
      </div>
      <div className="col-span-5 row-span-7 row-start-2 flex-center">
        {renderChart(specificWidget)}
      </div>
    </div>
  );
};

export default WidgetDashboard;
