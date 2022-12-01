import styled from "styled-components";
import {COLOR} from "../../utils/theme";
import {ContentContainer} from "../../components";


export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Container = styled(ContentContainer)`
  margin: 30px 25px 25px 25px;
  width: auto;
  padding: 20px 25px 32px 25px;
`;

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
`;
export const InputWrapper = styled.div`
  margin: 22px auto 0 auto;
  input {
    margin-bottom: 15px;
  }
`;
export const ButtonWrapper = styled.div`
  margin: 0 25px 0 25px;
`;