import React, { useEffect, useState } from 'react'
import { MainHeader } from '../components/Headers/MainHeader'
import styled from 'styled-components'
import { LegoCard } from '../components/Cards/LegoCard'
import { Grid } from '@mui/material'
import { MainButton } from '../components/Buttons/MainButton'
import { DetailsModal } from '../components/Modals/DetailsModal'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  getLego,
  getLegoDetails,
  getLegoPartsDetails,
  getLegos
} from '../features/minifigs/legoSlice'
import { useNavigate } from 'react-router-dom'
import Cookies from 'universal-cookie'

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  min-height: 95vh;
`
const StyledGrid = styled(Grid)`
  && {
    margin-top: 25px;
    margin-bottom: 75px;
  }
`

const PointerGrid = styled(Grid)`
  cursor: pointer;
`

export const OfferPage: React.FC = () => {
  const navigate = useNavigate()
  const legoItems: any = useAppSelector(getLegos)
  const dispatch: any = useAppDispatch()
  const [modal, setModal] = useState<boolean>(false)
  const [selected, setSelected] = useState<string>('')
  const cookies = new Cookies()

  useEffect(() => {
    if (legoItems.length === 0) {
      dispatch(getLego())
    }
  }, [])

  const selectLego: any = (value: string) => {
    setSelected(value)
    cookies.set('lego', value)
  }

  const displayLego: any = () => {
    return legoItems.map((item: any, key: number) => {
      return (
        <PointerGrid item key={key} onClick={() => selectLego(item.set_num)}>
          <LegoCard
            isSelected={selected === item.set_num}
            id={item.set_num}
            text={item.name}
            image={item.set_img_url}
            setModal={setModal}
          ></LegoCard>
        </PointerGrid>
      )
    })
  }

  const checkout: () => void = () => {
    dispatch(getLegoPartsDetails(selected)).then((res: any) => {
      dispatch(getLegoDetails(selected)).then((res: any) => {
        navigate('/shipping')
      })
    })
  }

  return (
    <MainContainer>
      <MainHeader size="32px" color="white" text="CHOOSE YOUR MINIFIG" />
      <StyledGrid
        justifyContent="center"
        alignItems="center"
        container
        spacing={5}
      >
        {displayLego()}
      </StyledGrid>
      <MainButton
        disabled={selected === ''}
        onClick={checkout}
        text="PROCCED TO SHIPMENT"
      />
      <DetailsModal setModal={setModal} modal={modal} />
    </MainContainer>
  )
}
