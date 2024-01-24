import styled from "styled-components";
import {BORDER_RADIUS, COLOR} from "utils/theme";

export const LocationWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  font-size: 20px;
  border-radius: ${BORDER_RADIUS.FOURTH};
  border: ${props => props.withAdditionalStyles ? `1px solid ${COLOR.ACCENT5}` : 'none'};
  margin: 0 0 10px 0;
  color: ${COLOR.ACCENT1};

  svg {
    width: 10px;
    height: 16px;
    display: block;
    margin: 0 10px 0 0;
    color: ${COLOR.ACCENT1};
  }
`;