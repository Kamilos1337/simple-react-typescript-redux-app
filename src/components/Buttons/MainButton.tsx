import React from 'react'
import styled from 'styled-components'
import Button from '@mui/material/Button'

interface MainButtonProps {
  text: string
  color?: string
  disabled?: boolean
  onClick?: () => void
}

const StyledButton = styled(Button)`
  text-transform: uppercase;
  && {
    padding-left: 50px;
    padding-right: 50px;
    text-weight: bold;
    border-radius: 15px;
    font-family: Sora-bold;
  }
`

export const MainButton: React.FC<MainButtonProps> = ({
  text,
  color,
  disabled,
  onClick
}) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled} variant="contained">
      {text}
    </StyledButton>
  )
}
