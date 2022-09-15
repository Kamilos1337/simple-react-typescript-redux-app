import React from 'react'
import { MainHeader } from '../components/Headers/MainHeader'
import { MainButton } from '../components/Buttons/MainButton'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { getLego } from '../features/minifigs/legoSlice'
import { useAppDispatch } from '../app/hooks'

const MainContainer = styled.div`
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

export const MainPage: React.FC = () => {
  const navigate = useNavigate()
  const dispatch: any = useAppDispatch()
  const getStarted: any = () => {
    dispatch(getLego()).then((res: any) => {
      if (res.payload != null) {
        navigate('/offer')
      }
    })
  }

  return (
    <MainContainer>
      <MainHeader size="32px" color="white" text="lego minifigs mystery box" />
      <MainButton text="lets go!" onClick={getStarted} />
    </MainContainer>
  )
}
