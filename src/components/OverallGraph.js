import * as d3 from "d3";
import { useEffect, useState } from "react";
import { VerricalAxis, HorizontalAxis } from "./Axis";
const OverallGraph = ({ setYear }) => {
  const [population, setPopulation] = useState([]);
  const [price, setPrice] = useState([]);
  const [displayYear, setDisplayYear] = useState(null);

  const colorScale = d3.scaleOrdinal(d3.schemeCategory10);
  useEffect(() => {
    (async () => {
      const res_popu = await fetch("./data/population_test.json");
      const data_popu = await res_popu.json();
      setPopulation(data_popu);

      const res_price = await fetch("./data/price_test.json");
      const data_price = await res_price.json();
      setPrice(data_price);
    })();
  }, []);
  if (price.length === 0) {
    return <div className="column is-5">Loading...</div>;
  }
  const margin = {
    top: 50,
    bottom: 50,
    left: 200,
    right: 50,
  };

  const contentWidth = 300;
  const contentHeight = 500;
  const svgWidth = margin.right + margin.left + contentWidth;
  const svgHeight = margin.top + margin.bottom + contentHeight;
  const xScaleYear = d3
    .scaleLinear()
    .domain(d3.extent(price, (item) => item["year"]))
    .range([0, contentWidth]);

  const yScalePopulation = d3
    .scaleLinear()
    .domain([0, d3.extent(population, (item) => item["population"])[1]])
    .range([contentHeight, 0]);
  const yScalePrice = d3
    .scaleLinear()
    .domain([0, d3.extent(price, (item) => item["price"])[1]])
    .range([contentHeight, 0]);
  console.log(xScaleYear.ticks(10));
  const mouseEnterYearHandler = (e) => {
    setYear(2019);
  };

  return (
    <div className="column is-5">
      <div className="box">
        {displayYear === null ? (
          <div>
            <svg
              viewBox={`${-margin.left} ${-margin.top} ${svgWidth} ${svgHeight}`}
              width={svgWidth}
              height={svgHeight}
            >
              <HorizontalAxis
                scale={xScaleYear}
                graphWidth={contentWidth}
                graphHeight={contentHeight}
                label="年"
                setData={setYear}
                graphType={"year"}
              />

              <VerricalAxis
                scale={yScalePrice}
                graphHeight={contentHeight}
                label={"受け入れ額"}
              />

              <g>
                {price.map((item, i) => {
                  const x = xScaleYear(item["year"]) + 20;
                  const y = yScalePrice(item["price"]);

                  console.log(xScaleYear(item["year"]));

                  return (
                    <path
                      key={item.id}
                      d={`M ${x - 10} ${y}
                       H ${x + 10} V ${contentHeight} H ${x - 10} 
                      V ${y}
                      `}
                      stroke={colorScale("price")}
                      fill={colorScale("price")}
                    />
                  );
                })}
              </g>

              {/* {displayYear === null && graphType === "population" && (
                <g>
                  {population.map((item, i) => {
                    const preData = i > 0 ? population[i - 1] : null;
                    if (i > 0) {
                      return (
                        <g>
                          <line
                            key={item.id}
                            x1={xScaleYear(preData["year"])}
                            y1={yScalePopulation(preData.population)}
                            x2={xScaleYear(item["year"])}
                            y2={yScalePopulation(item.population)}
                            stroke={colorScale("population")}
                          ></line>
                          <circle
                            key={item.id}
                            cx={xScaleYear(item["year"])}
                            cy={yScalePopulation(item.population)}
                            r="2"
                            fill={colorScale("population")}
                          ></circle>
                        </g>
                      );
                    }
                  })}
                </g>
              )} */}
            </svg>
          </div>
        ) : (
          ""
        )}

        <div>
          <span>年度を選択</span>
          <button onClick={mouseEnterYearHandler}>2019</button>
        </div>
      </div>
    </div>
  );
};
export default OverallGraph;
