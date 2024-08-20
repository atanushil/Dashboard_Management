import { PiechartData } from "../../constants";
import DashNav from "./nav/DashNav";
import AddWidget from "./widget/AddWidget";
import Widget from "./widget/Widget";

const Dashboard = () => {
  return (
    <div className="sky-gradient-11 z-0 w-full min-h-screen">
      <DashNav name={"CNAPP Dashboard"} />
      <div className="px-3 pl-6 mb-4 ">
        <p className="py-2 text-black text-lg font-light">{"Category name"}</p>
        <div className="flex justify-between  w-full overflow-x-auto gap-3 md:gap-2  items-center">
          {PiechartData.map((item, i) => (
            <Widget heading={item.heading} text={item} key={i} />
          ))}
          <AddWidget />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
