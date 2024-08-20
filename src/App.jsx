import { PiechartData } from "./constants";
import { CustomPieChart, Dashboard, Home, NavBar } from "./utils";

export default function App() {
  return (
   <>
   <NavBar state={'Home > Dashboard v2'}/>
    <Dashboard/>
    {/* <Home/> */}
    {/* <CustomPieChart data={PiechartData}/> */}
   </>
  )
}