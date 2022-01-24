import JapanMap from "./JapanMap";
import OverallGraph from "./OverallGraph";
import { useState } from "react";
import IndividualGraph from "./IndividualGraph";
import * as d3 from "d3";
const Main = () => {
  const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
  const [area, setArea] = useState(null);
  const [year, setYear] = useState(null);
  return (
    <div className="columns is-multiline" style={{ marginTop: "10px" }}>
      <JapanMap currentArea={area} />
      <div className="column is-6">
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
