import styled from 'styled-components'
import {COLOR} from "../../utils/theme";

export const MapWrapper = styled.div`
    width: 100%;
    height: 300px;
    border: solid 2px ${COLOR.ACCENT9};
    
    & > div {
        height: 300px;
    }
`