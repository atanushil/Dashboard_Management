import React from "react";
import { BigSizePie, categoryList, SmallSizePie } from "../../constants";
import {
  CustomPieChart,
  CustomSplineChart,
  CustomStackBarChart,
  NotFound,
} from "../../utils";
import { useParams, useLocation } from "react-router-dom";
const WidgetDashboard = ({}) => {
  const { categoryName, heading } = useParams();
  const location = useLocation();
  const { specificWidget } = location.state || {};
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
            key={widget.id}
          />
        );
      case "SplineChart":
        return (
          <CustomSplineChart
            BoxClass={"w-full bg-white mx-4 rounded-lg h-full text-black"}
            data={widget.data}
            heading={widget.heading}
            key={widget.id}
          />
        );
      case "StackBarChart":
        return (
          <CustomStackBarChart
            BoxClass={"w-full h-full bg-white px-4 mx-4 text-black rounded-lg"}
            data={widget.data}
            heading={widget.heading}
            key={widget.id}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-5 grid-rows-8 gap-2 md:h-[74vh] h-[76vh] m-4 uppercase text-white">
      <div className="col-span-5 flex-center mx-4 px-4 caret-transparent mb-2 rounded-lg lg:justify-start bg-white text-black text-2xl whitespace-nowrap">
        {categoryName} Dashboard
      </div>
      <div className="col-span-5 row-span-7 row-start-2 flex-center caret-transparent h-full w-full">
        {/* {console.log(specificWidget)
        } */}
        {(specificWidget && renderChart(specificWidget)) || (
          <div className="bg-white w-full h-full mx-4 rounded-lg bg-gradient-to-r uppercase from-blue-500 via-purple-500 to-pink-500">
            <NotFound message={"You route a unknown route please write a valid route."} color={"text-white text-2xl"}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default WidgetDashboard;
