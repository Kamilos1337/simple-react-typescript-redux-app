import React from 'react'
import styled from 'styled-components'

interface MainHeaderProps {
  text: string
  color: string
  size: string
}

interface HeadlineProps {
  size?: string
  color?: string
}

const Headline = styled.h1<HeadlineProps>`
  color: ${(props) => props.color ?? 'white'};
  text-transform: uppercase;
  text-weight: bold;
  font-family: Sora-bold;
  font-size: ${(props) => props.size ?? '16px'};
`

export const MainHeader: React.FC<MainHeaderProps> = ({
  text,
  color,
  size
}) => {
  return (
    <Headline color={color} size={size}>
      {text}
    </Headline>
  )
}
