import styled from 'styled-components'

export const Container = styled.div`
  width: 769px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 3rem;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    img {
      width: 240px;
      height: 351px;
    }

    padding: 0 1rem;
  }
`

export const Content = styled.div`
  width: 276px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    width: 90%;
  }
`

export const Infos = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 1.75rem;
    font-weight: 500;
    line-height: 2.5rem;

    color: var(--primary);
  }

  h2 {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;

    color: var(--pink100);
  }
`

export const Details = styled.div`
  margin-bottom: 2rem;

  h1 {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;

    color: var(--primary);

    margin-bottom: 1rem;
  }
`

export const Detail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;

    color: var(--secondary);
  }

  p:first-child {
    color: var(--primary);
  }
`

export const Review = styled.div`
  h1,
  p {
    font-size: 0.75rem;
    font-weight: 400;
    line-height: 1.25rem;

    color: var(--secondary);
  }

  h1 {
    color: var(--primary);
    margin-bottom: 0.5rem;
  }
`
