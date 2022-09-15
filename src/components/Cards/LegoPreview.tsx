import React from 'react'
import styled from 'styled-components'

interface LegoCardProps {
  image?: string
  text: string
}

const LegoImage = styled.img`
  width: 180px;
`

const Title = styled.h2`
  font-size: 18px;
  font-family: Sora-bold;
  letter-spacing: 0.5px;
`
const Container = styled.div`
  text-align: center;
`

export const LegoPreview: React.FC<LegoCardProps> = ({ text, image }) => {
  return (
    <Container>
      <LegoImage src={image} alt="" />
      <Title>{text}</Title>
    </Container>
  )
}
