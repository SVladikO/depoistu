// import {useEffect} from "react";
// import {useMap} from 'react-leaflet'; // moved in package.json to dev dependecies
// import {GeoSearchControl, OpenStreetMapProvider} from 'leaflet-geosearch';
//
// import './SearchInput.css'
// import {markerIcon} from '../customUI/markerIcon/markerIcon'
//
// const SearchInput = () => {
//     const map = useMap();
//
//     const searchControl = new GeoSearchControl({
//         provider: new OpenStreetMapProvider(),
//         style: 'button',
//         marker:  {icon: markerIcon},
//         classNames: {
//             container: 'map_container',
//             form: 'form_container',
//             input: 'map_input',
//             resetButton: 'reset_button',
//             resultlist: 'map_result_list'
//         },
//     });
//
//     useEffect(() => {
//         map.addControl(searchControl);
//         return () => map.removeControl(searchControl);
//     }, []);
//
//     return null;
// };
//
// export default SearchInput