import * as topojson from "topojson";
import * as d3 from "d3";
import { useEffect, useState } from "react";

const JapanMap = ({ currentArea }) => {
  const [japanPath, setJapanPath] = useState([]);
  const [area, setArea] = useState(null);
  const [json, setJson] = useState(null);
  const [targetPoint, setTargetPoint] = useState([]);

  const width = 630;
  const height = 250;
  const scale = 30000 * 0.7 * 0.09;
  const east = 138.915833,
    west = 139.796111,
    north = 35.672778,
    south = 35.128889;

  const projection = d3
    .geoMercator()
    .center([(west + east) / 2, (north + south) / 2 - 0.01])
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
      let target = JSON.parse(JSON.stringify(json));
      let strArea = String(currentArea);
      target.features.length = 0;

      strArea = strArea.slice(0, -1);

      json.features.map((item) => {
        if (item.properties.N03_007 == strArea) {
          target.features.push(item);
        }
      });
      const tmpPoint = d3.geoCentroid(target);
      const point = projection(tmpPoint);
      setTargetPoint(point);
      setArea(currentArea);
    }
  }, [currentArea]);

  if (!japanPath.length) {
    return (
      <div className="column is-5">
        <div className="box">
          <p>loading</p>
        </div>
      </div>
    );
  }

  return (
    <div className="column is-5">
      <div className="box">
        <svg viewBox="-50 0 770 325" width="500" height="550">
          <g>
            {japanPath.map((item, i) => (
              <path
                key={i}
                d={item.path}
                stroke="black"
                strokeWidth="0.8"
                strokeOpacity="0.5"
                style={{
                  fill: area == item.areaCode ? "red" : "white",
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
        </svg>
      </div>
    </div>
  );
};
export default JapanMap;
