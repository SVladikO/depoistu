// import React, {useState} from 'react';
// import {MapContainer, Marker, Popup, TileLayer, useMapEvents} from "react-leaflet";
//
// import 'leaflet/dist/leaflet.css'
// import './SearchInput/SearchInput.css'
// // import {Geocoder} from "./Geocoder/Geocoder";
// import SearchInput from "./SearchInput/SearchInput";
// import {MapWrapper} from './Map.style'
// import {markerIcon} from "./customUI/markerIcon/markerIcon";
//
// const mapStyle = {height: '100%', width: '100%'}
//
// //Should be used to add/edit location.
// // Documentation: https://react-leaflet.js.org/docs/start-setup/
// export const MapEditor = ({
//                               position = [50.4178159, 30.5753967],
//                               zoom = 18,
//                               zoomControl = true,
//                               setLat,
//                               setLng,
//                           }) => {
//     const [lng, lat] = position;
//     const [position2, setPosition2] = useState()
//
//     function LocationMarker() {
//         useMapEvents({
//             click(e) {
//                 const {lat, lng} = e?.latlng || {};
//                 setLng(lat);
//                 setLat(lng)
//                 console.log(2222, lat, lng);
//                 setPosition2([lat, lng])
//             },
//             overlayadd(e) {
//                 console.log('overlayadd: ', e)
//             },
//             layeradd(e) {
//                 console.log('layeradd: ', e)
//             },
//             add(e) {
//                 console.log('add: ', e)
//             },
//             locationfound(e) {
//                 console.log('locationfound: ', e)
//             }
//         })
//
//         if (!position2) {
//             return null;
//         }
//
//         return (
//             <Marker icon={markerIcon} position={position2}>
//                 <Popup>You are here</Popup>
//             </Marker>
//         )
//     }
//
//     return (
//         <MapWrapper key={lng + lat}>
//             <MapContainer
//                 zoom={zoom}
//                 center={position}
//                 style={mapStyle}
//                 zoomControl={zoomControl}
//                 scrollWheelZoom={false}
//             >
//                 <SearchInput/>
//                 <LocationMarker/>
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//             </MapContainer>
//         </MapWrapper>
//     );
// }
//
// // should be used to display location.
// export function LocationMarker2222() {
//     function LocationMarker() {
//         const [position, setPosition] = useState([50.4178159, 30.5753967])
//         useMapEvents({
//             click(e) {
//                 const {lat, lng} = e.latlng;
//                 setPosition([lat, lng])
//             },
//
//         })
//
//         return (
//             <Marker icon={markerIcon} position={position}>
//                 <Popup>You are here</Popup>
//             </Marker>
//         )
//     }
//
//     return (
//         <MapWrapper>
//             <MapContainer
//                 center={[50.4178159, 30.5753967]}
//                 zoom={13}
//                 scrollWheelZoom={false}
//             >
//                 <TileLayer
//                     attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                     url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//                 />
//                 <LocationMarker/>
//             </MapContainer>
//         </MapWrapper>
//     )
// }
//
// //
// // export const MapEditor = ({position = [50.4178159, 30.5753967], zoom = 16, zoomControl = true, companyName}) => (
// //     <MapWrapper>
// //         <MapContainer
// //             zoom={zoom}
// //             center={position}
// //             style={mapStyle}
// //             zoomControl={zoomControl}
// //             scrollWheelZoom={false}
// //         >
// //             <SearchInput/>
// //             <Marker icon={markerIcon} position={position}>
// //                 <Popup>{companyName}</Popup>
// //             </Marker>
// //             <TileLayer
// //                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// //                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
// //             />
// //         </MapContainer>
// //     </MapWrapper>
// // );
