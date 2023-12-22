import React from 'react';
import {MapContainer, TileLayer, useMap} from "react-leaflet";
import 'leaflet/dist/leaflet.css'
import './SearchInput/SearchInput.css'
// import {Geocoder} from "./Geocoder/Geocoder";
import SearchInput from "./SearchInput/SearchInput";

const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const tileUrl = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
const mapStyle = {height: '100%', width: '100%'}

// Documentation: https://react-leaflet.js.org/docs/start-setup/
function Map({children, center = [51.505, -0.09], zoom = 13}) {

    return (
        <MapContainer
            zoom={zoom}
            center={center}
            style={mapStyle}
            zoomControl={false}
            scrollWheelZoom={true}
        >
            <TileLayer attribution={attribution} url={tileUrl} />
            <TileLayer
                attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <SearchInput />
            {children}
            {/*<Geocoder address={"Вінниця, Київська 25"} />*/}
        </MapContainer>
    );
};

export default Map;