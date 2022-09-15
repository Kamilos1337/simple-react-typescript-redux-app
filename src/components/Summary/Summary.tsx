import React from 'react'
import styled from 'styled-components'
import { MainHeader } from '../Headers/MainHeader'
import { LegoPreview } from '../Cards/LegoPreview'
import { MainButton } from '../Buttons/MainButton'
import { MinifigDetails } from './MinifigDetails'
import { useAppDispatch } from '../../app/hooks'
import { doPurchase } from '../../features/minifigs/legoSlice'
import { useNavigate } from 'react-router-dom'

interface SummaryProps {
  isSubmit?: boolean
  maxHeight: boolean
  legoParts: []
  legoDetails: any
  values?: any
}

interface ContainerProps {
  maxHeight: boolean
}

const MainContainer = styled.div<ContainerProps>`
  background: white;
  width: 90%;
  margin: 0 auto;
  padding: 15px;
  margin-top: ${(props) => (props.maxHeight ? '25px' : '0px')};
  border-radius: 15px;
  min-height: ${(props) => (props.maxHeight ? '90vh' : '100%')};
  position: relative;
`
const StyledTitle = styled.h4`
  margin-top: 50px;
  margin-bottom: 25px;
`
const Center = styled.div`
  text-align: center;
  position: absolute;
  bottom: 20px;
  margin: 0 auto;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const Summary: React.FC<SummaryProps> = ({
  values,
  maxHeight,
  isSubmit,
  legoParts,
  legoDetails
}) => {
  const navigate = useNavigate()
  const dispatch: any = useAppDispatch()
  const buyLego: () => void = () => {
    dispatch(doPurchase(values)).then((res: any) => {
      console.log(values)
      navigate('/')
    })
  }
  return (
    <MainContainer maxHeight={maxHeight}>
      <MainHeader size="22px" color="black" text="Summary" />
      <LegoPreview image={legoDetails?.set_img_url} text={legoDetails?.name} />
      <StyledTitle>
        There are {legoParts.length} parts in this minifig:
      </StyledTitle>
      <MinifigDetails legoParts={legoParts} />
      <Center>
        {isSubmit !== undefined
          ? (
          <MainButton onClick={buyLego} disabled={isSubmit} text="Submit" />
            )
          : null}
      </Center>
    </MainContainer>
  )
}
