import * as d3 from "d3";
import { useEffect, useState } from "react";
import { VerricalAxis, HorizontalAxis } from "./Axis";

const IndividualGraph = ({ setArea, year }) => {
  const [detailData, setDetailData] = useState([]);
  const margin = {
    top: 0,
    bottom: 50,
    left: 200,
    right: 50,
  };

  const contentWidth = 500;
  const contentHeight = 250;
  const svgWidth = margin.right + margin.left + contentWidth;
  const svgHeight = margin.top + margin.bottom + contentHeight;
  useEffect(() => {
    (async () => {
      const data = {};
      let ADYear = 2008;
      for (let i = 20; i < 33; i++) {
        const resYear = i <= 30 ? "H" + i : "R" + (i - 30);
        const res = await fetch(`./data/${resYear}.json`);
        const datum = await res.json();
        console.log(datum);
        data[ADYear] = datum;
        ADYear++;
      }
      setDetailData(data);
    })();
  }, []);
  if (detailData.length === 0) {
    console.log("データの取得中");
    return <div></div>;
  }
  if (!year) {
    console.log("年度が選択されていません");
    return <div className="column is-5">Loading...</div>;
  }
  console.log("data detail");
  console.log(detailData);
  const data = detailData[year].map((item) => {
    return {
      id: item.id,
      area: item.area,
    };
  });
  console.log("ojb");
  console.log(data);

  const xScaleAreaName = d3
    .scaleLinear()
    .domain(
      d3.extent([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ])
    )
    .range([contentWidth, 0]);
  const yScale2019Price = d3
    .scaleLinear()
    .domain([0, d3.extent(detailData[year], (item) => item["price"])[1]])
    .range([contentHeight, 0]);
  const yScalePopulation = d3
    .scaleLinear()
    .domain([0, d3.extent(detailData[year], (item) => item["population"])[1]])
    .range([contentHeight, 0]);
  if (Object.keys(detailData).length) {
    return (
      <div className="box" style={{ marginTop: "0" }}>
        <svg
          viewBox={`${-margin.left} ${-margin.top} ${svgWidth} ${svgHeight}`}
          width={svgWidth}
          height={svgHeight}
        >
          <g>
            {detailData[year].map((item, i) => {
              const x = xScaleAreaName(i);
              const y = yScale2019Price(item["price"]);

              return (
                <path
                  key={item.id}
                  d={`M ${x - 10} ${y}
                   H ${x + 10} V ${contentHeight} H ${x - 10} 
                  V ${y}
                  `}
                  // stroke={colorScale("price")}
                  // fill={colorScale("price")}
                />
              );
            })}
          </g>
          <g>
            {detailData[year].map((item, i) => {
              const preData = i > 0 ? detailData[year][i - 1] : null;
              if (i > 0) {
                return (
                  <g key={item.id * 100}>
                    <line
                      key={item.id * 10}
                      x1={xScaleAreaName(i - 1)}
                      y1={yScalePopulation(preData.population)}
                      x2={xScaleAreaName(i)}
                      y2={yScalePopulation(item.population)}
                      stroke="black"
                    ></line>
                    <circle
                      key={item.id}
                      cx={xScaleAreaName(item["year"])}
                      cy={yScalePopulation(item.population)}
                      r="2"
                      fill="black"
                    ></circle>
                  </g>
                );
              }
            })}
          </g>
          <VerricalAxis
            scale={yScale2019Price}
            graphHeight={contentHeight}
            label="受け入れ金額"
          />
          <HorizontalAxis
            scale={xScaleAreaName}
            graphWidth={contentWidth}
            graphHeight={contentHeight}
            label="市区町村"
            setData={setArea}
            graphType="area"
            optionData={data}
          />
        </svg>
      </div>
    );
  }
};
export default IndividualGraph;
