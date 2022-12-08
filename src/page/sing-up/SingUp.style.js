import styled from "styled-components";
import {COLOR} from "../../utils/theme";
import {ContentContainer} from "../../components";

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
  margin: 0 0 20px;
`;
export const InputWrapper = styled.div`
  margin: 22px auto 0 auto;
  input {
    margin-bottom: 15px;
  }
`;
