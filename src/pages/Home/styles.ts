import styled from 'styled-components'

import BackgroundSVG from '../../assets/Home.svg'

export const Container = styled.div`
  background: url(${BackgroundSVG}) center center;
  background-size: cover;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1136px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 42px 0;
`
