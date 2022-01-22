import * as d3 from "d3";

export const VerricalAxis = ({ scale, graphHeight, label }) => {
  const strokeColor = "#888";
  const x = 0;
  const [y1, y2] = scale.range();
  const deviceWidth = window.innerWidth;

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
        <g transform={`translate(-80, ${graphHeight / 2}) rotate(-90)`}>
          <text
            x="0"
            y="0"
            textAnchor="end"
            dominantBaseline="central"
            fontSize={deviceWidth > 768 ? "15" : "12"}
          >
            {label}
          </text>
        </g>

        {scale.ticks().map((y, i) => {
          return (
            <g key={i} transform={`translate(0, ${scale(y)})`}>
              <line x1="0" y1="0" x2="5" y2="0" stroke={strokeColor}></line>
              <text
                x="-8"
                y="0"
                textAnchor="end"
                dominantBaseline="central"
                fill="black"
                fontSize={deviceWidth > 768 ? "12" : "10"}
              >
                {y}
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
  const deviceWidth = window.innerWidth;
  const tickCount = graphType === "year" ? 10 : 20;
  const [x1, x2] = scale.range();
  const clickYearHandler = (e) => {
    setData(e.currentTarget.dataset.id);
  };
  return (
    <g>
      <line x1={x1} y1={y} x2={x2 + 25} y2={y} stroke={strokeColor}></line>
      <g>
        <g transform={`translate(${graphWidth / 2}, ${y + 40})`}>
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
          return (
            <g key={i} transform={`translate(${scale(x) + 20}, 0)`}>
              {/* <line
                x1="0"
                y1={graphHeight}
                x2="0"
                y2={graphHeight - 10}
                stroke={strokeColor}
              ></line> */}
              <text
                x="0"
                y={y + 15}
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={graphType !== "area" ? "12" : "5"}
                data-id={
                  graphType !== "area" || i === 20 ? x : optionData[i].id
                }
                onClick={clickYearHandler}
              >
                {graphType !== "area" || i === 20 ? x : optionData[i].area}
              </text>
            </g>
          );
        })}
      </g>
    </g>
  );
};
