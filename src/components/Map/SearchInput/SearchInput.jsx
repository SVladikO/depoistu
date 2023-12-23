import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import { useMap } from 'react-leaflet';
import {useEffect} from "react";
import './SearchInput.css'
import {markerIcon} from '../customUI/markerIcon/markerIcon'

//this is input with search
const SearchInput = () => {
    const map = useMap();

    const provider = new OpenStreetMapProvider();

    const searchControl = new GeoSearchControl({
        provider,
        marker:  {icon: markerIcon},
        style: 'button',
        classNames: {
            container: 'KKKKK',
            form: 'HHHHH',
            input: 'IIIII map_input',
            resetButton: 'BBBBB',
            resultlist: 'map_result_list'
        }
    });

    useEffect(() => {
        map.addControl(searchControl);
        return () => map.removeControl(searchControl);
    }, []);

    return null;
};

export default SearchInput