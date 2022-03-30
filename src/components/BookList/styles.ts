import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-wrap: wrap;

  gap: 1rem;

  @media (max-width: 1100px) {
    padding: 0px 1rem;
  }
`

export const ContainerLoading = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 50vh;
`
