import React from "react";
import GoogleMapReact from "google-map-react";

const Marker = ({ text }) => <div>{text}</div>;

const defaultCenter = {
  lat: 59.95,
  lng: 30.33,
};

const defaultZoom = 11;

export default function Map() {
  const googleMapsApiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || "";

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: googleMapsApiKey }}
        defaultCenter={defaultCenter}
        defaultZoom={defaultZoom}
      >
        <Marker lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
