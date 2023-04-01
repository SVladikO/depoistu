import styled from "styled-components";

export const RequestRow = styled.div`
  display: flex;
  align-items: center;
  padding: 5px 0;
  
    & > a {
      margin: 6px;
    }
  
    & > svg {
      margin: 0 10px;
      height: 16px;
      width: 16px;
    }
`;

export const Status = styled.span`
  margin: 0 4px;
  `;
export const LedError = styled.span`
  margin: 0 10px;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #ff0026;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #ff0026 0 2px 12px;
`;
export const LedSuccess = styled.span`
  margin: 0 10px;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: #ABFF00;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px;
`;