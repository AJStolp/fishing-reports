import type { GeoJSONSourceRaw, FillLayer, LineLayer } from "react-map-gl";

const sfNeighborhoods: GeoJSONSourceRaw = {
  type: "geojson",
  data: "https://raw.githubusercontent.com/uber/react-map-gl/master/examples/.data/feature-example-sf.json",
};

const fillLayer: FillLayer = {
  id: "sf-neighborhoods-fill",
  source: "sf-neighborhoods",
  type: "fill",
  paint: {
    "fill-outline-color": "#0040c8",
    "fill-color": "#fff",
    "fill-opacity": 0,
  },
};

const lineLayer: LineLayer = {
  id: "sf-neighborhoods-outline",
  source: "sf-neighborhoods",
  type: "line",
  paint: {
    "line-width": 2,
    "line-color": "#0080ef",
  },
};

// Make a copy of the map style
export default {
  sources: {
    ["sf-neighborhoods"]: sfNeighborhoods,
  },
  layers: [fillLayer, lineLayer],
};