
import CanvasJSReact from '@canvasjs/react-charts';
import { linkedin } from '../../utils'; 

const { CanvasJSChart } = CanvasJSReact;

const CustomSplineChart = ({title, data, axisYTitle, axisYPrefix  }) => {

  const options = {
    animationEnabled: true,
    title:{
        text: title,
        horizontalAlign:"center",
        fontSize:'16',
    },
    axisY: {
      title: axisYTitle || "Value", 
      prefix: axisYPrefix || "",
    },
    data: data && data.length > 0 ? [
      {
        yValueFormatString: `${axisYPrefix}#,###`, 

        type: "spline", 
        dataPoints: data, 
      },
    ] : [], 
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      {data && data.length > 0 ? (
        <CanvasJSChart options={options} />
      ) : (
        <div className="flex flex-col items-center justify-center w-full h-full p-8">
          <img src={linkedin} alt="No data" className="w-40 h-40 mb-4" />
          <h2 className="text-xl font-bold">No spline data available</h2>
        </div>
      )}
    </div>
  );
};

export default CustomSplineChart;
