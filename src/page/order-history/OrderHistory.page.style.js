import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  position: relative;
  z-index: 1;
 
  & > a {
    margin: 0 0 4px;
  }
`;