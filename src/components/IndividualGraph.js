import * as d3 from "d3";
import { useEffect, useState } from "react";
import { VerricalAxis, HorizontalAxis } from "./Axis";
import Legend from "./Legend";

const IndividualGraph = ({ setArea, year, colorScale }) => {
  const [detailData, setDetailData] = useState([]);
  const margin = {
    top: 20,
    bottom: 55,
    left: 60,
    right: 200,
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
        data[ADYear] = datum;
        ADYear++;
      }
      setDetailData(data);
    })();
  }, []);
  if (detailData.length === 0) {
    return (
      <div className="box" style={{ width: svgWidth, height: "100px" }}>
        読み込み中...
      </div>
    );
  }
  if (!year) {
    return (
      <div className="box" style={{ width: svgWidth }}>
        上のグラフから年を選択してください。
      </div>
    );
  }
  const data = detailData[year].map((item) => {
    return {
      id: item.id,
      area: item.area,
    };
  });

  const xScaleAreaName = d3
    .scaleLinear()
    .domain(
      d3.extent([
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      ])
    )
    .range([0, contentWidth]);
  const yScalePrice = d3
    .scaleLinear()
    .domain([
      0,
      d3.extent(detailData[year], (item) => item["price"] / 10000)[1],
    ])
    .range([contentHeight, 0]);
  const yScalePopulation = d3
    .scaleLinear()
    .domain([0, d3.extent(detailData[year], (item) => item["population"])[1]])
    .range([contentHeight, 0]);

  if (Object.keys(detailData).length) {
    return (
      <div
        className="box"
        style={{
          marginRight: "20px",
          marginTop: "5px",
          paddingLeft: "5px",
          paddingTop: "5px",
        }}
      >
        <div>
          <p style={{ paddingLeft: "20px", paddingBottom: "10px" }}>
            {year !== null ? year : ""}年
          </p>
          <svg
            viewBox={`${-margin.left} ${-margin.top} ${svgWidth} ${svgHeight}`}
            width={svgWidth}
            height={svgHeight}
          >
            <VerricalAxis
              scale={yScalePrice}
              graphWidth={contentWidth}
              graphHeight={contentHeight}
              graphName={`individual`}
              location="left"
              label="受け入れ金額"
            />
            <VerricalAxis
              scale={yScalePopulation}
              graphWidth={contentWidth}
              graphHeight={contentHeight}
              graphName={`individual`}
              location="right"
              label="人口"
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
            <Legend scale={colorScale} graphWidth={contentWidth} />
            <g>
              {detailData[year].map((item, i) => {
                const x = xScaleAreaName(i + 1) + 20;
                const y = yScalePrice(item["price"] / 10000);

                return (
                  <path
                    key={item.id}
                    d={`M ${x - 10} ${y}
                   H ${x + 10} V ${contentHeight} H ${x - 10} 
                  V ${y}
                  `}
                    fill={colorScale("受け入れ額")}
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
                        x1={xScaleAreaName(i) + 20}
                        y1={yScalePopulation(preData.population)}
                        x2={xScaleAreaName(i + 1) + 20}
                        y2={yScalePopulation(item.population)}
                        stroke={colorScale("人口")}
                        strokeWidth="3"
                      ></line>
                      <circle
                        key={item.id}
                        cx={xScaleAreaName(i + 1) + 20}
                        cy={yScalePopulation(item.population)}
                        r="4"
                        fill={colorScale("人口")}
                      ></circle>
                    </g>
                  );
                }
              })}
            </g>
          </svg>
        </div>
      </div>
    );
  }
};
export default IndividualGraph;
