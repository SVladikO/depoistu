import styled from 'styled-components'

export const Wrapper = styled.div`
    border: solid 1px red;
    padding: 20px;
    display: flex;
    justify-content: center;
  
    & > a {
      padding: 10px;
      color: black;
      text-decoration: none;
    }
`;