import JapanMap from "./JapanMap";
import OverallGraph from "./OverallGraph";
import { useState } from "react";
import IndividualGraph from "./IndividualGraph";
import * as d3 from "d3";
const Main = () => {
  const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
  const FIRST_YEAR = 2008;
  const [area, setArea] = useState(null);
  const [year, setYear] = useState(FIRST_YEAR);
  return (
    <div className="columns is-multiline" style={{ marginTop: "10px" }}>
      <JapanMap currentArea={area} />
      <div className="column is-7">
        <OverallGraph setYear={setYear} colorScale={colorScale} />
        <IndividualGraph
          setArea={setArea}
          year={year}
          colorScale={colorScale}
        />
      </div>
    </div>
  );
};
export default Main;
