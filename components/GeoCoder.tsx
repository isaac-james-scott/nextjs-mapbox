import React, { useEffect } from "react";
import { useMapboxMap } from "./Mapbox";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import CoordinatesGeoCoder from "./CoordinatesGeoCoder";

const geoCoderControl = new MapboxGeocoder({
  accessToken: apiKey,
  localGeocoder: CoordinatesGeoCoder,
  zoom: 4,
  placeholder: "Try: -40, 170",
  mapboxgl: mapboxgl,
  reverseGeocode: true,
});

const GeoCoder: React.VFC = () => {
  const map = useMapboxMap();

  useEffect(() => {
    map.addControl(geoCoderControl);
    return () => {
      map.removeControl(geoCoderControl);
    };
  }, [map]);

  return null;
};

export default GeoCoder;
