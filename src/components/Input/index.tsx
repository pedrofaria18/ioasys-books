import { useCallback, useState } from 'react'

import { Container, InputContainer, Spinner } from './styles'

interface IInput {
  haveButton?: boolean
  label: string
  type: 'email' | 'password'
  loading?: boolean
  onChange: (value: string, name: string) => void
  onClick?: () => void
}

export function Input({
  haveButton,
  label,
  type,
  loading,
  onChange,
  onClick,
}: IInput) {
  const [inputValue, setInputValue] = useState('')

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.value, type)
      setInputValue(event.target.value)
    },
    [type, onChange]
  )

  return (
    <Container>
      <InputContainer>
        <label htmlFor={type}>{label}</label>
        <input
          id={type}
          name={type}
          type={type}
          value={inputValue}
          onChange={handleChange}
        />
      </InputContainer>
      {haveButton && (
        <button type="submit" onClick={onClick}>
          {loading ? <Spinner /> : 'Entrar'}
        </button>
      )}
    </Container>
  )
}
