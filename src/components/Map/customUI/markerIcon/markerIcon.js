import L from 'leaflet';
import MarkerIcon from 'assets/icons/location.svg'

export const markerIcon = new L.Icon({
    iconUrl: MarkerIcon,
    iconRetinaUrl: MarkerIcon,
    iconAnchor: null,
    popupAnchor: [-0, -0],
    iconSize: new L.Point(30, 30),
});

