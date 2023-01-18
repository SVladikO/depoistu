import styled from "styled-components";

export const Absolute = styled.div`
  position: absolute;
  ${p => p.top && `top: ${p.top}`};
  ${p => p.bottom && `bottom: ${p.bottom}`};
  ${p => p.left && `left: ${p.left}`};
  ${p => p.right && `right: ${p.right}`};
`;