import styled, {css} from "styled-components";


export const ContentWrapper = styled.div`
  width: 1000px;
  margin: auto;
`;
export const RouteWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  & > svg {
    position: absolute;
    top: 20px;
    left: 2px;
  }
`

export const URL = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 0 10px;
`;


export const RowDefault = css`
  margin: 8px 0 8px 30px;
  display: flex;
  align-items: center;
  border: solid;
  padding: 4px;
  border-radius: 4px;
`
export const RowGET = styled.div`
  border-color: dodgerblue;
  background-color: rgba(30, 144, 255, 0.2);
  ${RowDefault}
`;

export const RowPOST = styled.div`
  border-color: limegreen;
  background-color: rgba(50, 205, 50, 0.2);
  ${RowDefault}
`;

export const RowPUT = styled.div`
  border-color: orange;
  background: rgba(255, 165, 0, 0.2);
  ${RowDefault}
`;
export const RowDELETE = styled.div`
  border-color: red;
  background: rgba(255, 0, 0, 0.2);
  ${RowDefault}
`;

export const MethodDefault = css`
  font-weight: bold;
  font-size: 16px;
  color: white;
  padding: 4px;
  width: 90px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;
`;

export const MethodGET = styled.div`
  background-color: dodgerblue;
  ${MethodDefault}
`;

export const MethodPOST = styled.div`
  background-color: limegreen;
  ${MethodDefault}
`;

export const MethodPUT = styled.div`
  background-color: orange;
  ${MethodDefault}
`;
export const MethodDELETE = styled.div`
  background-color: red;
  ${MethodDefault}
`;



























