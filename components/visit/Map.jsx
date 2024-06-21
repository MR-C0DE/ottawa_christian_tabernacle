import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px'
};

const center = {
  lat: 45.438110,
  lng: -75.659830
};

const Map = () => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyA1JgsBlMNTd9tV0sJq0_Gwv8Zv8NcZcqA">
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={20}
      >
        <Marker position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
