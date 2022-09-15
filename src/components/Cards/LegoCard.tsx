import React from 'react'
import styled from 'styled-components'
import { LegoPreview } from './LegoPreview'
import {
  getLegoDetails,
  getLegoPartsDetails
} from '../../features/minifigs/legoSlice'
import { useAppDispatch } from '../../app/hooks'

interface LegoCardProps {
  text: string
  image?: string
  id: string
  setModal: (modal: boolean) => void
  isSelected: boolean
}

interface ContainerProps {
  selected: boolean
}

const Container = styled.div<ContainerProps>`
  text-weight: bold;
  background: white;
  padding: 25px 55px 25px 55px;
  border-radius: 15px;
  box-shadow: ${(props) =>
    props.selected ? '0px 0px 25px 14px rgba(255, 86, 0, 1)' : ''};
`

const Details = styled.p`
  color: orange;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
`
const PreviewContainer = styled.div`
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 220px;
`

export const LegoCard: React.FC<LegoCardProps> = ({
  setModal,
  text,
  image,
  id,
  isSelected
}) => {
  const dispatch: any = useAppDispatch()
  const loadDetails: (id: string) => void = (id) => {
    dispatch(getLegoPartsDetails(id)).then((res: {}) => {
      dispatch(getLegoDetails(id)).then((res: {}) => {
        setModal(true)
      })
    })
  }
  return (
    <Container selected={isSelected}>
      <PreviewContainer>
        <LegoPreview image={image} text={text} />
      </PreviewContainer>

      <Details onClick={() => loadDetails(id)}>Show details</Details>
    </Container>
  )
}
