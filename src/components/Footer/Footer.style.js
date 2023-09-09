import styled from "styled-components";
import {COLOR, FONT} from "utils/theme";
import {Flex} from "components/Flex/Flex.style";

export const Wrapper = styled.div`
  max-width: 414px;
  background-color: ${COLOR.ACCENT4};
  margin: 0 auto;
  padding: 0 0 100px;
`;

export const Question = styled(Flex)`
  ${FONT.SIZE_18};
  ${FONT.WEIGHT_400};
  color: ${COLOR.ACCENT1};
  padding: 24px 0 16px;

  & > svg {
    margin-top: -5px;
  }

  .unClicked {
    cursor: pointer;
  }

  .reversed {
    transform: rotate(180deg);
  }
`;

export const Row = styled.div`
  ${FONT.SIZE_18};
  ${FONT.WEIGHT_400};
  color: ${COLOR.ACCENT1}
  border-bottom: 1px ${COLOR.ACCENT2} solid;
  width: 100%;
  display: flex;
  justify-content: center;
  color: ${COLOR.ACCENT1};
  padding: 8px;
`;

export const LocationInfo = styled.div`
  ${FONT.SIZE_16};
  ${FONT.WEIGHT_400};
  color: ${COLOR.ACCENT1};
  margin: 16px auto 16px auto;
  text-align: center;
`;
export const Support = styled.div`
  ${FONT.SIZE_16};
  ${FONT.WEIGHT_400};
  margin: 16px 0 0 0;
  border: none;
  display: flex;
  justify-content: center;
  color: ${COLOR.ACCENT1};
  a {
    color: unset;
  }
`;