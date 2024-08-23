import { categoryList } from "../../constants";
import { DashNav, Widget, WidgetDashboard } from "../../utils";

const Dashboard = () => {
  return (
    <div className="z-0 w-full px-4">
      <DashNav name="CNAPP Dashboard" />
      <Widget/>
      {/* {categoryList.map((cat, i) => (
        <>
          {cat.widget.map((wid, j) => (
            <>
              {
                <WidgetDashboard
                  categoryName={cat.categoryName}
                  specificWidget={wid}
                  key={j}
                />
              }
            </>
          ))}
        </>
      ))} */}
    </div>
  );
};

export default Dashboard;
