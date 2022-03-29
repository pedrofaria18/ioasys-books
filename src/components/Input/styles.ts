import styled from 'styled-components'

export const Container = styled.div`
  width: 24rem;
  height: 3.75rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 0.5rem;

  background: var(--input-background);

  padding: 0.5rem 1rem;

  border-radius: 4px;

  button {
    display: flex;
    align-items: flex-end;
    justify-content: center;

    width: 85px;
    height: 2.25rem;

    padding: 0.5rem 1.25rem;

    background: #fff;

    border-radius: 44px;

    font-size: 1rem;
    font-weight: 500;
    line-height: 1.25rem;

    color: var(--pink100);
  }

  @media (max-width: 720px) {
    width: 23rem;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  background: transparent;

  gap: 0.25rem;

  label {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1rem;

    color: #fff;
    opacity: 0.5;
  }

  input {
    width: 250px;

    background: transparent;
    border: 0;

    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;

    color: #fff;

    &:focus,
    &:hover {
      outline: none;
    }

    &::placeholder {
      color: #fff;
    }

    @media (max-width: 720px) {
      width: 100%;
    }
  }
`

export const Spinner = styled.div`
  border: 3px solid rgba(0, 0, 0, 0.01);
  border-left-color: var(--pink100);
  border-radius: 50%;
  width: 1.5rem;
  height: 1.5rem;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`
