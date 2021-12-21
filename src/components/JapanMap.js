import * as topojson from "topojson";
import * as d3 from "d3";
import { useEffect, useState } from "react";

const JapanMap = () => {
  const [japanPath, setJapanPath] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await fetch(`./data/japan_simplify.topojson`);

      const data = await res.json();
      const features = await topojson.feature(
        data,
        data.objects["N03-21_210101-N03-21_210101"]
      );
      console.log(features.features);
      console.log(typeof features);
      const width = 630;
      const height = 250;
      const scale = 30000 * 0.7 * 0.04;

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
        });
      });
      setJapanPath(japanPath);
    })();
  }, []);
  if (!japanPath.length) {
    console.log("aa");
    return <p>loading</p>;
  }

  console.log("start");

  console.log(japanPath);
  return (
    <svg viewBox="0 0 770 325" style={{ border: "1px lsolid #ccc" }}>
      <g>
        {japanPath.map((item, i) => (
          <path
            key={i}
            d={item.path}
            fill="white"
            stroke="black"
            strokeWidth="0.4"
            strokeOpacity="0.5"
          />
        ))}
      </g>
    </svg>
  );
};
export default JapanMap;
