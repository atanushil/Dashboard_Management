import React from "react";
import { BigSizePie, categoryList, SmallSizePie } from "../../constants";
import {
  CustomPieChart,
  CustomSplineChart,
  CustomStackBarChart,
} from "../../utils";
const WidgetDashboard = () => {
  const getWidget = (categoryId, widgetId) => {
    const category = categoryList.find((cat) => cat.id === categoryId);
    if (category) {
      return category.widget.find((w) => w.id === widgetId);
    }
    return null; // Return null if category or widget is not found
  };

  // Example usage: Store widget with id 2 from the CSPM category (id 1)
  const specificWidget = getWidget(3, 2);
  const renderChart = (widget) => {
    switch (widget.chart) {
      case "PieChart":
        return (
          <CustomPieChart
            PieSize={BigSizePie}
            BoxClass={"w-full bg-white mb-4 mx-4 p-4 text-black"}
            key={widget.id}
            data={widget.data}
            heading={widget.heading}
          />
        );
      case "SplineChart":
        return (
          <CustomSplineChart
            BoxClass={"w-full bg-white mx-4 rounded-lg h-full text-black"}
            key={widget.id}
            data={widget.data}
            heading={widget.heading}
          />
        );
      case "StackBarChart":
        return (
          <CustomStackBarChart
            key={widget.id}
            data={widget.data}
            heading={widget.heading}
          />
        );
      default:
        return null;
    }
  };
  return (
    <div
      className="grid grid-cols-5 grid-rows-8 gap-4 sm:h-[76vh] h-[77vh] m-4 
    uppercase  text-white"
    >
      <div className="col-span-5 flex-center mx-4 px-4 rounded-lg lg:justify-start bg-white text-black text-2xl whitespace-nowrap">
        {"categoryName"}
      </div>
      <div className="col-span-5 row-span-7 row-start-2  flex-center  ">
        {renderChart(specificWidget)}
      </div>
    </div>
  );
};

export default WidgetDashboard;
