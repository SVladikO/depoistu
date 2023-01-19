import styled from "styled-components";

export const RowSplitterStyle = styled.div`
  position: relative;
  height: ${p => p.height || 'auto'};
  margin: ${p => p.margin || 0};
`
