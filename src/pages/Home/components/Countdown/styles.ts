import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  display: flex;
  gap: 1rem;

  span {
    background-color: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media (max-width: 400px) {
    overflow-x: hidden;
    font-size: 4rem;
    line-height: 6rem;
    gap: 0.5rem;

    display: flex;

    span {
      background-color: ${(props) => props.theme['gray-700']};
      padding: 1rem 0.5rem;
      border-radius: 8px;
    }
  }
`

export const Separator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['green-500']};

  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media (max-width: 400px) {
    font-size: 5rem;
    line-height: 4rem;
    width: 1rem;
  }
`
