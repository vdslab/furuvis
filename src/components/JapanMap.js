import * as topojson from "topojson";
import * as d3 from "d3";
import { useEffect, useState } from "react";
import ZoomableSVG from "./ZoomableSVG";

const JapanMap = ({ currentArea }) => {
  const [japanPath, setJapanPath] = useState([]);
  const [area, setArea] = useState(null);
  const [json, setJson] = useState(null);
  const [targetPoint, setTargetPoint] = useState([]);
  const svgWidth = 200;
  const svgHeight = 500;
  const width = 630;
  const height = 250;
  const scale = 30000 * 0.7 * 0.1;
  const east = 138.915833,
    west = 139.796111,
    north = 35.672778,
    south = 35.128889;

  const projection = d3
    .geoMercator()
    .center([(west + east) / 2 - 0.5, (north + south) / 2 + 1.8])
    .translate([width / 2, height - 60])
    .scale(scale);

  useEffect(() => {
    (async () => {
      const res = await fetch(`./data/japan_simplify.topojson`);
      const data = await res.json();
      const features = await topojson.feature(
        data,
        data.objects["N03-21_210101-N03-21_210101"]
      );

      const path = d3.geoPath().projection(projection);
      const japanPath = [];
      features.features.map((item) => {
        japanPath.push({
          path: path(item),
          areaCode: item.properties.N03_007,
        });
      });

      setJapanPath(japanPath);
      setJson(features);
    })();
  }, []);
  useEffect(() => {
    if (json) {
      const target = JSON.parse(JSON.stringify(json));
      const strArea = String(currentArea.id).slice(0, -1);
      target.features.length = 0;
      target.features = json.features.filter((item) => {
        if (currentArea.area === item.properties.N03_003) {
          return true;
        } else if (String(item.properties.N03_007) === strArea) {
          return true;
        } else {
          return false;
        }
      });
      const centerPoint = projection(d3.geoCentroid(target));
      setTargetPoint(centerPoint);
      setArea(strArea);
    }
  }, [currentArea]);

  if (!japanPath.length) {
    return (
      <div className="column is-5">
        <div className="box" style={{ height: "500px" }}>
          <p>????????????????????????...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="column is-5">
      <div className="box" style={{ marginLeft: "20px", marginRight: "0" }}>
        <ZoomableSVG width={svgWidth} height={svgHeight}>
          <g>
            {japanPath.map((item, i) => (
              <path
                key={i}
                d={item.path}
                stroke="black"
                strokeWidth="0.8"
                strokeOpacity="0.5"
                style={{
                  fill: "white",
                }}
              />
            ))}
          </g>
          {targetPoint.length > 0 ? (
            <g>
              <circle
                cx={targetPoint[0]}
                cy={targetPoint[1]}
                r="15"
                strokeWidth="4"
                fill="rgba(255,0,0,0)"
                stroke="red"
              ></circle>
            </g>
          ) : (
            ""
          )}
        </ZoomableSVG>
      </div>
    </div>
  );
};
export default JapanMap;
