import * as d3 from "d3";
import { useEffect, useState } from "react";
import { VerricalAxis, HorizontalAxis } from "./Axis";
const OverallGraph = ({ effect }) => {
  const [population, setPopulation] = useState([]);
  const [price, setPrice] = useState([]);
  const [graphType, setGraphType] = useState("price");
  const [displayYear, setDisplayYear] = useState(null);
  const [detailData, setDetailData] = useState([]);
  const [targetArea, setTargetArea] = useState(null);
  useEffect(() => {
    (async () => {
      const res_popu = await fetch("./data/population_test.json");
      const data_popu = await res_popu.json();
      setPopulation(data_popu);

      const res_price = await fetch("./data/price_test.json");
      const data_price = await res_price.json();
      setPrice(data_price);
      const res_2019 = await fetch("./data/2019_test.json");
      const data_2019 = await res_2019.json();
      setDetailData(data_2019);
    })();
  }, []);
  if (population.length === 0) {
    return <div>Loading...</div>;
  }
  const margin = {
    top: 50,
    bottom: 50,
    left: 200,
    right: 50,
  };

  const contentWidth = 500;
  const contentHeight = 500;
  const svgWidth = margin.right + margin.left + contentWidth;
  const svgHeight = margin.top + margin.bottom + contentHeight;
  const xScaleYear = d3
    .scaleLinear()
    .domain(d3.extent(price, (item) => item["year"]))
    .range([0, contentWidth])
    .nice();
  const xScaleAreaName = d3
    .scaleLinear()
    .domain(d3.extent(detailData, (item) => item["rank"]))
    .range([0, contentWidth])
    .nice();
  const mouseEnterTypeHandler = (e) => {
    setDisplayYear(null);
    setGraphType("population");
  };
  const mouseEnterYearHandler = (e) => {
    setGraphType(null);
    setDisplayYear(2019);
  };
  const mouseEnterAreaHandler = (e) => {
    effect(e.currentTarget.dataset.id);
    console.log(e.currentTarget.dataset.id);
  };

  const yScalePopulation = d3
    .scaleLinear()
    .domain([0, d3.extent(population, (item) => item["population"])[1]])
    .range([contentHeight, 0]);
  const yScalePrice = d3
    .scaleLinear()
    .domain([0, d3.extent(price, (item) => item["price"])[1]])
    .range([contentHeight, 0]);
  const yScale2019Price = d3
    .scaleLinear()
    .domain([0, d3.extent(detailData, (item) => item["price"])[1]])
    .range([contentHeight, 0]);
  return (
    <div className="column is-5">
      <div className="box">
        <svg
          viewBox={`${-margin.left} ${-margin.top} ${svgWidth} ${svgHeight}`}
          width={svgWidth}
          height={svgHeight}
          // style={{ border: "1px solid black" }}
        >
          {displayYear === null && graphType && (
            <HorizontalAxis
              scale={xScaleYear}
              graphWidth={contentWidth}
              graphHeight={contentHeight}
              label="年"
            />
          )}
          {displayYear === null && graphType && (
            <VerricalAxis
              scale={graphType === "price" ? yScalePrice : yScalePopulation}
              graphHeight={contentHeight}
              label={graphType === "price" ? "受け入れ額" : "人口"}
            />
          )}
          {displayYear === null && graphType === "price" && (
            <g>
              {price.map((item, i) => {
                const preData = i > 0 ? price[i - 1] : null;
                if (i > 0) {
                  return (
                    <line
                      key={item.id}
                      x1={xScaleYear(preData["year"])}
                      y1={yScalePrice(preData.price)}
                      x2={xScaleYear(item["year"])}
                      y2={yScalePrice(item.price)}
                      stroke="black"
                    ></line>
                  );
                }
              })}
            </g>
          )}
          {displayYear === null && graphType === "population" && (
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
          )}
          {displayYear === 2019 && detailData.length > 0 && (
            <VerricalAxis
              scale={yScale2019Price}
              graphHeight={contentHeight}
              label="受け入れ金額"
            />
          )}
          {displayYear === 2019 && detailData.length > 0 && (
            <HorizontalAxis
              scale={xScaleAreaName}
              graphWidth={contentWidth}
              graphHeight={contentHeight}
              label="市区町村（順位）"
            />
          )}
          {displayYear === 2019 && detailData.length > 0 && (
            <g>
              {detailData.map((item, i) => {
                const preData = i > 0 ? detailData[i - 1] : null;
                if (i > 0) {
                  return (
                    <line
                      key={item.id}
                      x1={xScaleAreaName(preData["rank"])}
                      y1={yScale2019Price(preData.price)}
                      x2={xScaleAreaName(item["rank"])}
                      y2={yScale2019Price(item.price)}
                      stroke="black"
                    ></line>
                  );
                }
              })}
            </g>
          )}
          )
        </svg>
        <div>
          {displayYear === 2019 && detailData.length > 0 && (
            <ul>
              {detailData.map((item, i) => {
                return (
                  <li key={i} data-id={item.id} onClick={mouseEnterAreaHandler}>
                    {item.name}
                  </li>
                );
              })}
            </ul>
          )}
          <span>特徴を選択</span>
          <button onClick={mouseEnterTypeHandler}>人口</button>)
        </div>
        <div>
          <span>年度を選択</span>
          <button onClick={mouseEnterYearHandler}>2019</button>
        </div>
      </div>
    </div>
  );
};
export default OverallGraph;
