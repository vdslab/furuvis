import * as topojson from "topojson";
import * as d3 from "d3";
import { useEffect, useState } from "react";

const JapanMap = ({ currentArea }) => {
  const [japanPath, setJapanPath] = useState([]);
  const [area, setArea] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await fetch(`./data/japan_simplify.topojson`);

      const data = await res.json();
      const features = await topojson.feature(
        data,
        data.objects["N03-21_210101-N03-21_210101"]
      );

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
      const path = d3.geoPath().projection(projection);
      const japanPath = [];
      features.features.map((item) => {
        japanPath.push({
          path: path(item),
          area_code: item.properties.N03_007,
        });
      });
      setJapanPath(japanPath);
    })();
  }, []);

  useEffect(() => {
    setArea(currentArea);
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
        <svg
          viewBox="-50 0 770 325"
          // style={{ border: "1px solid black" }}
          width="500"
          height="550"
        >
          <g>
            {japanPath.map((item, i) => (
              <path
                key={i}
                d={item.path}
                stroke="black"
                strokeWidth="0.4"
                strokeOpacity="0.5"
                style={{
                  fill:
                    area >= item.area_code && area < item.area_code + 20
                      ? "red"
                      : "white",
                }}
              />
            ))}
          </g>
        </svg>
      </div>
    </div>
  );
};
export default JapanMap;
