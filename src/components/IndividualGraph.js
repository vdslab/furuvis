import * as d3 from "d3";
import { useEffect, useState } from "react";
import { VerricalAxis, HorizontalAxis } from "./Axis";

const IndividualGraph = ({ setArea, year }) => {
  const [detailData, setDetailData] = useState([]);
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
  useEffect(() => {
    (async () => {
      const res_2019 = await fetch("./data/2019_test.json");
      const data_2019 = await res_2019.json();
      setDetailData(data_2019);
    })();
  }, []);
  if (detailData.length === 0) {
    return <div></div>;
  }

  const data = detailData.map((item) => {
    const obj = {
      name: item.name,
      id: item.id,
    };

    return obj;
  });

  const xScaleAreaName = d3
    .scaleLinear()
    .domain([0, d3.extent(detailData, (item) => item["rank"])[1]])
    .range([0, contentWidth]);

  const yScale2019Price = d3
    .scaleLinear()
    .domain([0, d3.extent(detailData, (item) => item["price"])[1]])
    .range([contentHeight, 0]);

  const mouseEnterAreaHandler = (e) => {
    effect(e.currentTarget.dataset.id);
  };

  if (year && detailData.length === 0) {
    return <div className="column is-5">Loading...</div>;
  } else if (detailData.length) {
    return (
      <div className="column is-5">
        <div className="box">
          <svg
            viewBox={`${-margin.left} ${-margin.top} ${svgWidth} ${svgHeight}`}
            width={svgWidth}
            height={svgHeight}
          >
            <g>
              {detailData.map((item, i) => {
                const x = xScaleAreaName(item["rank"]);
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

            <VerricalAxis
              scale={yScale2019Price}
              graphHeight={contentHeight}
              label="受け入れ金額"
            />
            <HorizontalAxis
              scale={xScaleAreaName}
              graphWidth={contentWidth}
              graphHeight={contentHeight}
              label="市区町村（順位）"
              setData={setArea}
              graphType="area"
              optionData={data}
            />
          </svg>
        </div>
      </div>
    );
  }
};
export default IndividualGraph;
