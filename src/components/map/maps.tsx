import React from "react";
import { useEffect, useRef } from "react";
import type { NextPage } from "next";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { useCallback } from "react";
// import "mapbox-gl/dist/mapbox-gl.css";

// function Map() {
//   const mapContainer = useRef(null);
//   // Create a new Mapbox GL map
//   const map = new mapboxgl.Map({
//     container: "map",
//     style: "mapbox://styles/mapbox/streets-v11",
//     center: [-87.9, 46.1],
//     zoom: 6,
//   });

//   // Add a GeoJSON layer for Wisconsin to the map
//   map.addSource("wisconsin", {
//     type: "geojson",
//     data: "https://example.com/wisconsin.geojson",
//   });
//   map.addLayer({
//     id: "wisconsin-border",
//     type: "fill",
//     source: "wisconsin",
//     paint: {
//       "fill-color": "#00FF00",
//     },
//   });

//   // Add a GeoJSON layer for the Upper Peninsula of Michigan to the map
//   map.addSource("michigan-up", {
//     type: "geojson",
//     data: "https://example.com/michigan-up.geojson",
//   });
//   map.addLayer({
//     id: "michigan-up-border",
//     type: "fill",
//     source: "michigan-up",
//     paint: {
//       "fill-color": "#0000FF",
//     },
//   });
//   return <div className="map-container" ref={mapContainer} />;
// }

const Map: NextPage = () => {
  const mapContainer = useRef(null);
  const map = useRef<mapboxgl.Map | any>(null);

  const handleMapLoad = useCallback(() => {
    // Check if the data source has already been added
    if (!map.current.getSource("wisconsin")) {
      // Add a data source containing GeoJSON data.
      // map.current.addSource("wisconsin", {
      //   type: "geojson",
      //   data: {
      //     type: "Feature",
      //     geometry: {
      //       type: "Polygon",
      //       // These coordinates outline Wisconsin.
      //       coordinates: [
      //         [
      //           [-92.0, 47.0],
      //           [-87.5, 46.5],
      //           [-87.5, 48.0],
      //           [-84.5, 48.0],
      //           [-84.5, 46.5],
      //           [-83.5, 46.5],
      //           [-83.5, 45.5],
      //           [-82.5, 45.5],
      //           [-82.5, 44.5],
      //           [-85.5, 44.5],
      //           [-85.5, 43.5],
      //           [-90.0, 43.5],
      //           [-90.0, 46.5],
      //         ],
      //       ],
      //     },
      //   },
      // });
    }

    map.current.addControl(
      new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl,
      })
    );
    // Add a new layer to visualize the polygon.
    // map.current.addLayer({
    //   id: "wisconsins",
    //   type: "fill",
    //   source: "wisconsin", // reference the data source
    //   layout: {},
    //   paint: {
    //     "fill-color": "#0080ff", // blue color fill
    //     "fill-opacity": 0.5,
    //   },
    // });
    // // // Add a black outline around the polygon.
    // map.current.addLayer({
    //   id: "outline",
    //   type: "line",
    //   source: "wisconsin",
    //   layout: {},
    //   paint: {
    //     "line-color": "#000",
    //     "line-width": 3,
    //   },
    // });
  }, []);
  // the dependencies array should contain any values that the callback function uses that are not passed as arguments

  useEffect(() => {
    mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_GL_ACCESS_TOKEN ?? "";

    map.current = new mapboxgl.Map(
      {
        container: mapContainer.current,
        style: "mapbox://styles/astolp/clcnrub70000614qut6xmh0lp/draft",
        center: [-87.9, 45.1],
        zoom: 6,
      },
      []
    );

    console.log(map.current, ".current 1");

    map.current.on("load", handleMapLoad);
  }, [handleMapLoad]); // include handleMapLoad as a dependency to ensure that the callback is only created once

  return <div className="map-container" ref={mapContainer} />;
};

export default Map;
