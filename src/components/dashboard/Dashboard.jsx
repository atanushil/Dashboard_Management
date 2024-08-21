import { PiechartData, splineData } from "../../constants";
import {
  DashNav,
  AddWidget,
  Widget,
  CustomSplineChart,
  CustomStackBarChart,
} from "../../utils";

const Dashboard = () => {
  return (
    <div className="z-0 w-full px-4">
      <DashNav name="CNAPP Dashboard" />

      <div className="px-3 pl-6 mb-4">
        <p className="py-1 text-black text-lg font-light">Category name</p>
        <div className="flex justify-between w-full overflow-x-auto custom-scrollbar py-2 gap-3 md:gap-2 items-center">
          {PiechartData.map((item, i) => (
            <>
              <Widget heading={item.heading} text={item} key={i} />
            </>
          ))}
          <AddWidget />
        </div>
      </div>
      <div className="px-3 pl-6 mb-4">
        <p className="py-1 text-black text-lg font-light">Category name</p>
        <div className="flex justify-between w-full overflow-x-auto custom-scrollbar py-2 gap-3 md:gap-2 items-center">
          {PiechartData.map((item, i) => (
            <>
              <CustomSplineChart text={item} key={i} />
            </>
          ))}
          <AddWidget />
        </div>
      </div>
      <div className="px-3 pl-6 mb-4">
        <p className="py-1 text-black text-lg font-light">Category name</p>
        <div className="flex justify-between w-full overflow-x-auto custom-scrollbar py-2 gap-3 md:gap-2 items-center">
          {PiechartData.map((item, i) => (
            <>
              <CustomStackBarChart text={item} key={i} />
            </>
          ))}
          <AddWidget />
        </div>
      </div>

    </div>
  );
};

export default Dashboard;
