import * as d3 from "d3";
import { useEffect, useState } from "react";
import { VerricalAxis, HorizontalAxis } from "./Axis";
import Legend from "./Legend";
const OverallGraph = ({ setYear, colorScale }) => {
  const [population, setPopulation] = useState([]);
  const [price, setPrice] = useState([]);

  const margin = {
    top: 10,
    bottom: 50,
    left: 100,
    right: 200,
  };

  const contentWidth = 400;
  const contentHeight = 300;
  const svgWidth = margin.right + margin.left + contentWidth;
  const svgHeight = margin.top + margin.bottom + contentHeight;

  useEffect(() => {
    (async () => {
      const res_popu = await fetch("./data/population.json");
      const data_popu = await res_popu.json();
      setPopulation(data_popu);

      const res_price = await fetch("./data/price_all.json");
      const data_price = await res_price.json();
      setPrice(data_price);
    })();
  }, []);
  if (price.length === 0) {
    return (
      <div className="box" style={{ width: svgWidth, height: "200px" }}>
        読み込み中...
      </div>
    );
  }

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
    .domain([0, d3.extent(price, (item) => item["price"] / 10000)[1]])
    .range([contentHeight, 0]);

  return (
    <div
      className="box"
      style={{ marginRight: "20px", marginBottom: "5px", paddingBottom: "0" }}
    >
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
            graphWidth={contentWidth}
            graphHeight={contentHeight}
            graphName={`overall`}
            location="left"
            label="受け入れ額"
          />
          <VerricalAxis
            scale={yScalePopulation}
            graphWidth={contentWidth}
            graphHeight={contentHeight}
            graphName={`overall`}
            location="right"
            label="人口"
          />
          <Legend scale={colorScale} graphWidth={contentWidth} />
          <g>
            {price.map((item, i) => {
              const x = xScaleYear(item["year"]) + 20;
              const y = yScalePrice(item["price"] / 10000);

              return (
                <path
                  key={item.id}
                  d={`M ${x - 10} ${y}
                       H ${x + 10} V ${contentHeight} H ${x - 10} 
                      V ${y}
                      `}
                  stroke={colorScale("受け入れ額")}
                  fill={colorScale("受け入れ額")}
                  data-num={item.price}
                />
              );
            })}
          </g>

          <g>
            {population.map((item, i) => {
              const preData = i > 0 ? population[i - 1] : null;

              return (
                <g key={item.id * 100}>
                  {i > 0 && (
                    <line
                      key={item.id * 10}
                      x1={xScaleYear(preData["year"]) + 20}
                      y1={yScalePopulation(preData.population)}
                      x2={xScaleYear(item["year"]) + 20}
                      y2={yScalePopulation(item.population)}
                      stroke={colorScale("人口")}
                      strokeWidth="3"
                    ></line>
                  )}
                  <circle
                    title={String(item.population)}
                    key={item.id}
                    cx={xScaleYear(item["year"]) + 20}
                    cy={yScalePopulation(item.population)}
                    r="4"
                    fill={colorScale("人口")}
                    data-num={item.population}
                  ></circle>
                </g>
              );
            })}
          </g>
        </svg>
      </div>
    </div>
  );
};
export default OverallGraph;
