import React from 'react'
import styled from 'styled-components'

interface DetailsProps {
  legoParts: any
}

const MainContainer = styled.div`
  display: flex;
  margin-top: 15px;
  flex-direction: row;
  flex-wrap: wrap;
`
const StyledImg = styled.img`
  max-width: 64px;
  margin-right: 15px;
`
const Title = styled.span`
  color: black;
  font-weight: bold;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 220px;
`
const Description = styled.span`
  color: orange;
`
const DescriptionContainer = styled.div`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: column;
  justify-content: center;
`
const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 25px;
`

export const MinifigDetails: React.FC<DetailsProps> = ({ legoParts }) => {
  const displayDetails: () => string = () => {
    return legoParts.map((item: any, key: number) => {
      return (
        <ItemContainer id={'xd'} key={key}>
          <StyledImg src={item.part.part_img_url} />
          <DescriptionContainer>
            <Title>{item.part.name}</Title>
            <Description>{item.part.part_num}</Description>
          </DescriptionContainer>
        </ItemContainer>
      )
    })
  }

  return <MainContainer>{displayDetails()}</MainContainer>
}
