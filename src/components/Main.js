import JapanMap from "./JapanMap";
import OverallGraph from "./OverallGraph";
import { useEffect, useState } from "react";
import IndividualGraph from "./IndividualGraph";
const Main = () => {
  const [area, setArea] = useState(null);
  const [year, setYear] = useState(null);
  return (
    <div className="columns is-multiline" style={{ marginTop: "10px" }}>
      <JapanMap currentArea={area} />
      <OverallGraph setYear={setYear} />
      <IndividualGraph setArea={setArea} year={year} />
    </div>
  );
};
export default Main;
