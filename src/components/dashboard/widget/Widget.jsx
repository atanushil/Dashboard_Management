import { categoryList, SmallSizePie } from "../../../constants";
import {
  AddWidget,
  CustomPieChart,
  CustomSplineChart,
  CustomStackBarChart,
} from "../../../utils";
import { useNavigate } from 'react-router-dom';  // Import useNavigate hook for navigation

const Widget = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Function to render the appropriate chart based on the chart type
  const renderChart = (widget ,categoryName) => {
    
    switch (widget.chart) {
      case "PieChart":
        return (

            <CustomPieChart
              PieSize={SmallSizePie}
              BoxClass={"widget"}
              key={widget.id}
              data={widget.data}
              heading={widget.heading}
              categoryName={categoryName}
            />

        );
      case "SplineChart":
        return (

            <CustomSplineChart
              BoxClass={"widget"}
              key={widget.id}
              data={widget.data}
              heading={widget.heading}
              categoryName={categoryName}
            />

        );
      case "StackBarChart":
        return (

            <CustomStackBarChart
              BoxClass={"widget"}
              key={widget.id}
              data={widget.data}
              heading={widget.heading}
              categoryName={categoryName}
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
              {cat.widget.map((widget) => (
                renderChart(widget,cat.categoryName)))}
              <AddWidget />
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widget;
