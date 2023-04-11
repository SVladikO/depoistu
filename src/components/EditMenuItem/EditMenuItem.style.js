import styled from "styled-components";
import {COLOR, BORDER_RADIUS} from "../../utils/theme";
import {hexToRgbA} from "../../utils/utils";
import {PrimaryButton} from "../../components";

export const Wrapper = styled.div`
`;

export const MenuItemPhoto = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
  margin: 0 0 15px 0;
`;
export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
`;
export const ImagePlace = styled.div`
  width: 90px;
  height: 90px;
  background: ${COLOR.ACCENT2};
  border-radius: ${BORDER_RADIUS.CIRCLE};
  margin: 5px;
`;
export const EditButton = styled.button`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  width: 162px;
  height: 45px;
  background: ${hexToRgbA(COLOR.ACCENT3, 0.11)};
  color:${COLOR.ACCENT3};
  border-radius: ${BORDER_RADIUS.FOURTH};
`;

export const WideButton = styled(PrimaryButton)`
  display: flex;
  justify-content: center;
  align-items: center;
  svg{
    margin: 0 0 0 3px;
    color: ${COLOR.ACCENT4};
    width: 12px;
    height: 13px;
  }
`;
