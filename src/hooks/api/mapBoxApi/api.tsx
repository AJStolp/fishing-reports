// import { useRef, useEffect, useState } from "react";
// import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax

// mapboxgl.accessToken = process.env.Map_Box;

// const useFetchMapData = () => {
//   const mapContainer = useRef(null);
//   const map = useRef(null);
//   const [lng, setLng] = useState(-70.9);
//   const [lat, setLat] = useState(42.35);
//   const [zoom, setZoom] = useState(9);

//   const getMap = () => {
//     useEffect(() => {
//       if (map.current) return; // initialize map only once
//       map.current = new mapboxgl.Map({
//         container: mapContainer.current,
//         style: "mapbox://styles/mapbox/streets-v12",
//         center: [lng, lat],
//         zoom: zoom,
//       });
//     }, [zoom, lat, lng]);

//     useEffect(() => {
//       if (!map.current) return; // wait for map to initialize
//       map.current.on("move", () => {
//         setLng(map.current.getCenter().lng.toFixed(4));
//         setLat(map.current.getCenter().lat.toFixed(4));
//         setZoom(map.current.getZoom().toFixed(2));
//       });
//     });
//   };
//   return {
//     mapContainer,
//     map,
//     lng,
//     lat,
//     zoom,
//     getMap,
//   };
// };

// export default useFetchMapData;
