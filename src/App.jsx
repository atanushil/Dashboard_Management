import { Dashboard, Home, NavBar } from "./utils";

export default function App() {
  return (
   <>
   <NavBar state={'Home > Dashboard v2'}/>
    <Dashboard/>
    {/* <Home/> */}
   </>
  )
}