import styled from 'styled-components'

export const Container = styled.div`
  &::before {
    content: '';
    position: absolute;

    left: 1rem;
    top: -0.5rem;

    width: 0;
    height: 0;

    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid rgba(255, 255, 255, 0.4);
  }
  padding: 1rem;

  background: rgba(255, 255, 255, 0.4);

  border-radius: 0.25rem;

  position: relative;

  margin-top: 0.5rem;

  font-weight: 500;
  font-size: 1rem;
  line-height: 1rem;

  width: 15rem;

  color: #ffffff;
`
