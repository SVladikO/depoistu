import styled from "styled-components";
import {COLOR} from "../../utils/theme";
import {ContentContainer} from "../../components";

export const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: ${COLOR.ACCENT1};
  margin: 0 0 15px;
`;
export const Container = styled(ContentContainer)`
  margin-bottom: 12px;
`;
export const Wrapper = styled.div`
  margin-bottom: -10px;
`;
