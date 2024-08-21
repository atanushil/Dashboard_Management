import { linkedin } from "../../utils";

export default function CustomSplineChart() {
  return (
    <div className="widget flex-center flex-col gap-2">
      <div><img src={linkedin} alt="" className="max-h-44" /></div>
      <div><p>No Graph Data Avaiable.</p></div>
    </div>
  );
}
