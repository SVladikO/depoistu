import styled, {css} from "styled-components";

export const ContentWrapper = styled.div`
  width: 1000px;
  margin: auto;
  font-size: 18px;
  background: white;
  padding: 6px;
`;
export const RouteWrapper = styled.div`
  position: relative;

  & > svg {
    position: absolute;
    top: 20px;
    left: 2px;
  }
`

export const URL = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin: 0 10px 0 20px;

  width: 320px;
`;

export const BorderOnly = styled.div`
  border: solid 2px grey;
  display: flex;
  flex-direction: column;
  margin: 8px 0 8px 30px;
  
  `;
export const RowDefault = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4px;
  border-radius: 4px;
  width: 100%;
`
export const Row = {
    get: styled.div`
      ${RowDefault}
    `,
    post: styled.div`
    ${RowDefault}
    `,
    put: styled.div`
      ${RowDefault}
    `,
    delete: styled.div`
      ${RowDefault}
    `
};

export const MethodDefault = css`
  font-weight: bold;
  font-size: 18px;
  color: #313131;
  padding: 8px 4px;
  width: 90px;
  text-align: center;
  text-transform: uppercase;
  border-radius: 4px;
`;

export const Method = {
    get: styled.div`
      background-color: dodgerblue;
      ${MethodDefault}
    `,
    post: styled.div`
      background-color: limegreen;
      ${MethodDefault}
    `,
    put: styled.div`
      background-color: orange;
      ${MethodDefault}
    `,
    delete: styled.div`
      background-color: red;
      ${MethodDefault}
    `
};

export const Description = styled.div`
  width: 400px;
  display: flex;
  justify-content: left;
  font-size: 20px;
  background: none;
`;
export const ButtonDefault = css`
  background: none;
  padding: 6px;
  width: 60px;
  border: solid 2px grey;
`;
export const Button = {
    get: styled.button`
      ${ButtonDefault}
    `,
    post: styled.button`
      ${ButtonDefault}
    `,
    put: styled.button`
      ${ButtonDefault}
    `,
    delete: styled.button`
      ${ButtonDefault}
    `
};

export const Details = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 18px;
  background: antiquewhite;
  padding: 10px;
`;

export const DetailsTitle = styled.div`
 display: flex;
  align-items: flex-start;
  margin: 12px 0 2px;
`;
export const DetailsBody = styled.div`
   padding: 0 0 0 20px;
`;


























