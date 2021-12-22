import JapanMap from "./JapanMap";
// import MainView from "./MainView";
import OverallGraph from "./OverallGraph";
import { useEffect, useState } from "react";
const Main = () => {
  const [area, setArea] = useState(null);
  return (
    <div>
      <JapanMap currentArea={area} />
      {/* <MainView /> */}
      <OverallGraph effect={setArea} />
    </div>
  );
};
export default Main;
