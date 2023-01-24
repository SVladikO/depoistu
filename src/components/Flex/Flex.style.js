import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  ${p => p.width && `width: ${p.width}`};
  flex-direction: ${p => p.flexDirection || 'row'};
  justify-content: ${p => p.justifyContent || 'norman'};
  align-items: ${p => p.alignItems || 'norman'};
  ${p => p.margin ? `margin: ${p.margin}` : ''};
`;