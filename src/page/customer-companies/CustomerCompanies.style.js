import styled from "styled-components";
import {PrimaryButtonStyle} from "../../components/Button/Button.style";

export const ImageQR = styled.img`
  height: 250px;
  margin: 40px;
`;

export const QRCodeButton = styled(PrimaryButtonStyle)`
  padding: 10px;

  & > svg {
    width: 30px;
    height: 30px;
    margin: 0;
    display: block;
  }
`;
export const EditBar = styled.div`
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 18px;
`;

