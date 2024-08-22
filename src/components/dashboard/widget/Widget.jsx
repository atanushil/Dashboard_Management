import { ChartData, splinedata } from "../../../constants"
import { AddWidget, CustomPieChart, CustomSplineChart, CustomStackBarChart } from "../../../utils"

const Widget = () => {
  return (
    <div>
       <div className="px-3 pl-6 mb-4">
        <p className="py-1 text-black text-lg font-light">Category name</p>
        <div className="flex justify-between w-full overflow-x-auto custom-scrollbar py-2 gap-3 md:gap-2 items-center">
          {ChartData.map((item, i) => (
            <>
              <CustomPieChart data={[item]} heading={item.heading} key={i} />
            </>
          ))}
          <AddWidget />
        </div>
      </div>
      <div className="px-3 pl-6 mb-4">
        <p className="py-1 text-black text-lg font-light">Category name</p>
        <div className="flex justify-between w-full overflow-x-auto custom-scrollbar py-2 gap-3 md:gap-2 items-center">
          <CustomSplineChart
            data={splinedata.data}
            type={splinedata.type}
            heading={"A demo of synchronized AreaCharts"}
          />
          <AddWidget />
        </div>
      </div>
      <div className="px-3 pl-6 mb-4">
        <p className="py-1 text-black text-lg font-light">Category name</p>
        <div className="flex justify-between w-full overflow-x-auto custom-scrollbar py-2 gap-3 md:gap-2 items-center">
          {ChartData.map((item, i) => (
            <>
              <CustomStackBarChart text={item} key={i} />
            </>
          ))}
          <AddWidget />
        </div>
      </div>
    </div>
  )
}

export default Widget
