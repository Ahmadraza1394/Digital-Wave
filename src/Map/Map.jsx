import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
  const position = [25.276987, 55.296249];

  return (
    <MapContainer center={position} zoom={10} style={{ height: '80vh', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker 
        position={position} 
        icon={L.icon({ 
          iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png', 
          iconSize: [38, 95], 
          shadowSize: [50, 64], 
          iconAnchor: [22, 94], 
          shadowAnchor: [4, 62], 
          popupAnchor: [-3, -76], 
          shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
        })}
      >
        <Popup>
          Dubai, UAE. <br /> A beautiful city.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
