import { categoryList } from "../../../constants";
import {
  AddWidget,
  CustomPieChart,
  CustomSplineChart,
  CustomStackBarChart,
} from "../../../utils";

const Widget = () => {
  // Function to render the appropriate chart based on the chart type
  const renderChart = (widget) => {
    switch (widget.chart) {
      case "PieChart":
        return (
          <CustomPieChart
            key={widget.id}
            data={widget.data}
            heading={widget.heading}
          />
        );
      case "SplineChart":
        return (
          <CustomSplineChart
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
    <div>
      <div className="px-3 pl-6 mb-4">
        {categoryList.map((cat) => (
          <div key={cat.id}>
            <p className="py-1 text-black text-lg font-light">
              {cat.categoryName} Dashboard
            </p>

            <ul className="flex justify-between w-full overflow-x-auto custom-scrollbar py-2 gap-3 md:gap-2 items-center">
              {cat.widget.map((widget) => renderChart(widget))}
              <AddWidget />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widget;
