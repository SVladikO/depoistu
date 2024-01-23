import styled from "styled-components";
import {BORDER_RADIUS, rotationAnimation, FONT} from "utils/theme";

export const ButtonWrapper = styled.div`
    padding: ${p => p.withPadding ? '0 16px' : 0};
`;

export const button = styled.button`
    -webkit-user-select: none; /* Safari */
    -ms-user-select: none; /* IE 10 and IE 11 */
    user-select: none; /* Standard syntax */
    height: 50px;
    padding: 10px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    ${FONT.SIZE_20};

    border-radius: ${BORDER_RADIUS.BUTTON};
    ${p => p.isLoading && 'opacity: 0.8'};
    ${p => p.minWidth && `min-width: ${p.minWidth}`};
    width: ${p => p.isWide ? '100%' : 'auto'};
    cursor: ${p => p.isDisabled ? 'default' : 'pointer'};

    & > svg {
        width: ${p => p.isOnlyIcon ? 'auto' : '12px'};
        height: ${p => p.isOnlyIcon ? 'auto' : '12px'};
        margin: ${p => p.isOnlyIcon ? 0 : '0 10px 0 0'};
    }

    & > svg.loading {
        height: 20px;
        width: 20px;
        margin-right: 10px;
        animation: ${rotationAnimation} 1s infinite linear;
    }
`;