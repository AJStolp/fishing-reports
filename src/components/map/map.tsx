import { useRef, useEffect, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

mapboxgl.accessToken =
  "pk.eyJ1IjoiYXN0b2xwIiwiYSI6ImNsYXgzNHgydjBsc3Yzd216M2dpODJlcHgifQ.BqR2hAs34jpZeckwePiuNQ";

interface MapDataprops {
  children?: React.ReactNode;
  className?: string;
  tilesetId?: string;
  zoom?: number;
  xY?: number;
  format?: number;
  mapprefference: any;
  lat?: number;
  lng?: number;
}

const MapData = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(-87);
  const [lat, setLat] = useState(46);
  const [zoom, setZoom] = useState(5);

  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/outdoors-v12",
      center: [lng, lat],
      zoom: zoom,
    });
  });

  return (
    <div>
      <div ref={mapContainer} className="h-screen w-screen" />
    </div>
  );
};

export default MapData;
