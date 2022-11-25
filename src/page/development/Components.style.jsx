import styled from "styled-components";
import {COLOR, DEVICE_WIDTH} from "../../utils/theme";

export const Wrapper = styled.div`
    display: flex;
`;
export const Column = styled.div`
  border: solid .5px;
  width: ${DEVICE_WIDTH.MAX};
  padding: 10px;
`;

export const Space = styled.span`
    margin: 0 10px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
`;
export const Row = styled.div`
  padding: 10px;
`;
export const Component = styled.div`
  width: ${p => p.width || DEVICE_WIDTH.MIN};
  border: solid 1px blue;
  margin: 10px 0;
`;

export const ColorCircle = styled.div`
  background: ${p => p.bg};
  border-radius: 20px;
  width: 40px;
  height: 40px;;
`;
