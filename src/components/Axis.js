export const VerricalAxis = ({
  scale,
  graphWidth,
  graphHeight,
  location,
  label,
}) => {
  const strokeColor = "#888";
  const x = location === "left" ? 0 : graphWidth + 40;
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
        <g transform={`translate(-60, ${graphHeight / 2}) rotate(-90)`}>
          <text
            x={x}
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
            <g key={i} transform={`translate(${x}, ${scale(y)})`}>
              <line
                x1="0"
                y1="0"
                x2={location === "left" ? 5 : -5}
                y2="0"
                stroke={strokeColor}
              ></line>
              <text
                x={location === "left" ? -8 : 42}
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
  return (
    <g>
      <line x1={x1} y1={y} x2={x2 + 40} y2={y} stroke={strokeColor}></line>
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
                data-name={
                  graphType === "area" && i < 20 ? optionData[i].area : ""
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
