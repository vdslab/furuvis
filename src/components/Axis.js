import { useState } from "react";
export const VerricalAxis = ({
  scale,
  graphWidth,
  graphHeight,
  location,
  graphName,
  label,
}) => {
  const strokeColor = "#888";
  const x = location === "left" ? 0 : graphWidth + 40;
  const [y1, y2] = scale.range();
  const deviceWidth = window.innerWidth;
  let gradationsY = 0;
  let labelLocation = 0;
  if (location === "left") {
    gradationsY = -8;
  } else if (graphName === "overall") {
    gradationsY = 50;
  } else {
    gradationsY = 50;
  }

  if (location === "left") {
    if (graphName === "overall") {
      labelLocation = -80;
    } else {
      labelLocation = -50;
    }
  } else {
    labelLocation = graphWidth + 105;
  }
  return (
    <g>
      <line
        x1={x}
        y1={y1}
        x2={x}
        y2={y2 + 2}
        stroke={strokeColor}
        strokeWidth="2"
      ></line>
      <g>
        <g
          transform={`translate(${labelLocation}, ${graphHeight / 2}) rotate(${
            location === "left" ? -90 : 90
          })`}
        >
          <text
            x="0"
            y="0"
            dominantBaseline="central"
            fontSize={deviceWidth > 768 ? "15" : "12"}
            textAnchor="middle"
          >
            {label}
          </text>
        </g>
        <g>
          <text
            transform={`translate(${
              graphName === "individual" ? -40 : -60
            },20)`}
            x="0"
            y="0"
            textAnchor="start"
            fontSize="10"
          >
            万
          </text>
        </g>
        {scale.ticks().map((y, i) => {
          return (
            <g key={i} transform={`translate(${x}, ${scale(y)})`}>
              <line
                x1="0"
                y1="0"
                x2={location === "left" ? 5 : -5}
                y2="0"
                stroke={strokeColor}
              ></line>
              <text
                x={gradationsY}
                y="0"
                textAnchor="end"
                dominantBaseline="central"
                fill="black"
                fontSize={deviceWidth > 768 ? "12" : "10"}
              >
                {location === "left" ? y : y}
              </text>
            </g>
          );
        })}
      </g>
    </g>
  );
};
export const HorizontalAxis = ({
  scale,
  graphWidth,
  graphHeight,
  label,
  setData,
  graphType,
  optionData,
}) => {
  const strokeColor = "#888";
  const y = graphHeight;
  const tickCount = graphType === "year" ? 10 : 20;
  const [x1, x2] = scale.range();
  const [hoveredYear, setHoveredYear] = useState(null);
  const clickYearHandler = (e) => {
    if (graphType === "year") {
      setData(e.currentTarget.dataset.id);
    } else {
      setData({
        id: e.currentTarget.dataset.id,
        area: e.currentTarget.dataset.name,
      });
    }
  };
  const mouseOverHandler = (e) => {
    setHoveredYear(Number(e.currentTarget.dataset.id));
  };
  return (
    <g>
      <line x1={x1} y1={y} x2={x2 + 40} y2={y} stroke={strokeColor}></line>
      <g>
        <g
          transform={`translate(${graphWidth / 2}, ${
            y + (graphType === "area" ? 48 : 40)
          })`}
        >
          <text
            x="0"
            y="0"
            textAnchor="end"
            dominantBaseline="central"
            fontSize="15"
          >
            {label}
          </text>
        </g>

        {scale.ticks(tickCount).map((x, i) => {
          const id = graphType !== "area" ? x : optionData[i].id;

          return (
            <g
              key={i}
              transform={`translate(${scale(x) + 20}, ${
                y + (graphType === "area" ? 7 : 15)
              })`}
            >
              <text
                x="0"
                y="0"
                dominantBaseline="central"
                fontSize={graphType !== "area" ? "12" : "10"}
                transform={graphType === "area" ? "rotate(45)" : ""}
                textAnchor={graphType === "area" ? "start" : "middle"}
                style={{
                  cursor: "pointer",
                  textDecorationLine: id == hoveredYear ? "overline" : "none",
                }}
                data-id={id}
                data-name={graphType === "area" ? optionData[i].area : ""}
                onClick={clickYearHandler}
                onMouseOver={mouseOverHandler}
              >
                {graphType !== "area" ? x : optionData[i].area}
              </text>
            </g>
          );
        })}
      </g>
    </g>
  );
};
