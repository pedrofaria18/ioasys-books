import styled from 'styled-components'

interface ILogoStyles {
  isWhite?: boolean
}

export const Container = styled.div<ILogoStyles>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1rem;

  h1 {
    font-size: 1.75rem;
    font-weight: 300;
    line-height: 2.5rem;

    color: ${(props) => (props.isWhite ? '#fff' : 'var(--primary)')};
  }
`
