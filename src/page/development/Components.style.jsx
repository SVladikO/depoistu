import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Column = styled.div`
  border: solid .5px;
  min-width: 370px;
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
  background: ${p => p.bg};
`;
export const Component = styled.div`
  width: ${p => p.width || '360px'};
  border: solid 1px blue;
  margin: 10px 0;
`;

export const ColorCircle = styled.div`
  background: ${p => p.bg};
  border-radius: 20px;
  width: 40px;
  height: 40px;;
`;
