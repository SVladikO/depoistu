import styled from 'styled-components'
import {DEVICE_WIDTH} from './utils/theme.js'

export const Wrapper = styled.div`
  min-height: 100vh;
  margin: 0 auto;
  position: relative;
  max-width: ${DEVICE_WIDTH.MAX};
`;

document.body.style.backgroundColor = '#d8d8d8';