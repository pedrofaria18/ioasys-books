import styled from 'styled-components'

import BackgroundSVG from '../../assets/Login.svg'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  padding: 7vw;

  background-image: url(${BackgroundSVG});
  background-size: cover;

  @media (max-width: 1180px) {
    background-position: center;
  }
`
