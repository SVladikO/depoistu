import styled from "styled-components";
import {BORDER_RADIUS, SHADOW} from '../../utils/theme';

export const  Wrapper = styled.div`
    ${SHADOW};
    border-radius: 0 0 ${BORDER_RADIUS.SECOND} ${BORDER_RADIUS.SECOND};
`;
