import styled from "styled-components";
import {PrimaryButton} from "../../components/Buttons/PrimaryButton";

export const ImageQR = styled.img`
  height: 250px;
  width: 250px;
`;

export const QRCodeButton = styled(PrimaryButton)`
  padding: 10px;

  & > svg {
    width: 30px;
    height: 30px;
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
  padding: 10px 0 0 0;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-between;
  gap: 18px;
`;

