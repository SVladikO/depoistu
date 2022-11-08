import styled from "styled-components";
import {THEME} from "../../theme";
import {Link} from "react-router-dom";
import {ReactComponent as RightArrow} from "../../icons/right_arrow.svg";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;
export const LeftContent = styled.div`
  display: flex;

  & > svg {
    width: 16.82px;
    height: 19.22px;
    margin-right: 16px;
    fill: ${THEME.COLOR.ACCENT1};
  }
`;
export const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  color: ${THEME.COLOR.ACCENT1};
`
export const RightAnchor = styled.div`
  background-image: url("data:image/svg+xml,%3Csvg width='8' 
                          height='14' viewBox='0 0 8 14' fill='none' 
                          xmlns='http://www.w3.org/2000/svg'%3E%3Cpath 
                          d='M5.18109 6.80597L0.414087 2.04197C0.0631429 1.69059 0.0631429 1.12135 0.414087 0.769971C0.767617 0.421403 1.33556 0.421403 1.68909 0.769971L7.08909 6.16997C7.42789 6.51066 7.43934 7.0574 7.11509 7.41197L1.69309 12.845C1.34183 13.1971 0.771668 13.1977 0.419587 12.8465C0.0675054 12.4952 0.0668339 11.9251 0.418087 11.573L5.18109 6.80597Z' 
                          fill='%231C2340'/%3E%3C/svg%3E");
  width: 7.2px;
  background-repeat: no-repeat;
  background-size: cover;
  height: 12.6px;
  display: block;
  border: none;
  fill: #1C2340;
  &:hover{
    cursor: pointer;
  }
`;
export const Label = styled.span`
  color: #B4C2CD;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  display: block;
  margin-right: 11.5px;
  cursor: pointer;
`;
export const CustomLink = styled(Link)`
  text-decoration: none;
`;