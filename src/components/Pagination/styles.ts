import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  margin-top: 1rem;

  gap: 1rem;

  @media (max-width: 1100px) {
    padding: 0 1rem;
  }

  @media (max-width: 700px) {
    justify-content: center;
  }
`

export const ButtonGroup = styled.div`
  display: flex;

  gap: 0.5rem;
`
