import React from 'react';
import {MapContainer, TileLayer} from "react-leaflet";
import 'leaflet/dist/leaflet.css'

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
const mapStyle = {height: '100%', width: '100%'}

// Documentation: https://react-leaflet.js.org/docs/start-setup/
function Map({children, center = [51.505, -0.09], zoom = 13}) {
    return (
        <MapContainer
            zoom={zoom}
            center={center}
            scrollWheelZoom={false}
            style={mapStyle}
        >
            <TileLayer attribution={attribution} url={tileUrl} />
            {children}
        </MapContainer>
    );
};

export default Map;