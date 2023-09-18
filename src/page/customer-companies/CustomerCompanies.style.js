import styled from "styled-components";
import {DisabledButton} from "components/Buttons/DisabledButton";

export const ImageQR = styled.img`
  height: 320px;
  width: 320px;
  margin: 0 auto;
  display: block;
`;

export const QRCodeButton = styled(DisabledButton)`
  padding: 10px;
  
  & > svg {
    width: 24px;
    height: 24px;
    margin: 0;
    display: block;
  }
`;

export const QRCodeMenuTitle = styled.div`
  font-weight: 700;
  font-size: 32px;
  text-transform: uppercase;
  text-align: center;
  margin: 10px auto 10px auto;
`

export const EditBar = styled.div`
  margin: 0px -16px -20px -16px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  padding: 20px 0 0 0;
`;


