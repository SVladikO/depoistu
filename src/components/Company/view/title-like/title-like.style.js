import styled from "styled-components";
import {COLOR} from "../../../../utils/theme";


export const FirstRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > svg {
        height: 24px;
        width: 22px;
    }
`;

export const Name = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: ${COLOR.ACCENT1};
`;
