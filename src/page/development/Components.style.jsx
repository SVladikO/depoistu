import styled from "styled-components";

export const Wrapper = styled.div`
 display: flex;  
`;
export const Column = styled.div`
    border: solid ;
  width: 400px;
  padding: 10px;
  
`;

export const Row = styled.div`
    padding: 10px;
`;
export const ComponentWrapper = styled.div`
  width: 300px;
  border: solid 1px blue;
  margin: 10px 0;
`;

export const ColorCircle = styled.div`
  background: ${p => p.bg};
  border-radius: 40px;
  width: 80px;
  height: 80px;
;
`;
