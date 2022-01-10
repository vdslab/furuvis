import * as d3 from "d3";
import { useEffect, useState } from "react";
import { VerricalAxis, HorizontalAxis } from "./Axis";

const IndividualGraph = ({}) => {
  return (
    <g>
      {population.map((item, i) => {
        const preData = i > 0 ? population[i - 1] : null;
        if (i > 0) {
          return (
            <line
              key={item.id}
              x1={xScaleYear(preData["year"])}
              y1={yScalePopulation(preData.population)}
              x2={xScaleYear(item["year"])}
              y2={yScalePopulation(item.population)}
              stroke="black"
            ></line>
          );
        }
      })}
    </g>
  );
};
export default IndividualGraph;
