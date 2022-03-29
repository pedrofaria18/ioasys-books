import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  width: 17rem;
  height: 10rem;

  gap: 1rem;

  padding: 19px 1rem;

  border-radius: 0.25rem;

  background-color: #fff;

  box-shadow: 0 0.375 1.5rem rgba(84, 16, 95, 0.13);

  img {
    width: 81px;
    height: 122px;
  }

  &:hover {
    box-shadow: 0 0.375 1.5rem rgba(84, 16, 95, 0.25);
    cursor: pointer;
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const Infos = styled.div`
  h1 {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 20px;

    color: var(--primary);
  }

  h2 {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 20px;

    color: var(--pink50);
  }
`

export const Description = styled.div`
  p {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 20px;

    color: var(--secondary);

    max-width: 16ch;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`
