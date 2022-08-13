import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

export const BaseCountdownButton = styled.button`
  width: 100%;
  border: none;
  padding: 1rem;
  border-radius: 8px;
  align-items: center;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  color: ${(props) => props.theme['gray-100']};
`

export const StartCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme['gray-100']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['green-700']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StopCountdownButton = styled(BaseCountdownButton)`
  background-color: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['red-700']};
  }
`
