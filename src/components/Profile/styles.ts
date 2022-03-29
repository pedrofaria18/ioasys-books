import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;
`

export const Text = styled.h1`
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;

  color: var(--primary);

  @media (max-width: 480px) {
    display: none;
  }
`
