import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { ShippingForm } from '../components/Forms/ShippingForm'
import { Summary } from '../components/Summary/Summary'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import {
  getLegoDetails,
  getLegoPartsDetails,
  getLegosDetails,
  getLegosPartsDetails
} from '../features/minifigs/legoSlice'
import Cookies from 'universal-cookie'

interface ValuesProps {
  [key: string]: string
}

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-wrap: wrap;
  min-height: 95vh;
`

export const ShippingPage: React.FC = () => {
  const cookies = new Cookies()
  const legoPartsDetails: any = useAppSelector(getLegosPartsDetails)
  const legoDetails: any = useAppSelector(getLegosDetails)
  const [isSubmit, setIsSubmit] = React.useState<boolean>(false)
  const dispatch: any = useAppDispatch()
  const [values, setValues] = React.useState<ValuesProps>({})
  useEffect(() => {
    if (legoPartsDetails.length === 0 && cookies.get('lego') !== undefined) {
      dispatch(getLegoPartsDetails(cookies.get('lego')))
      dispatch(getLegoDetails(cookies.get('lego')))
    }
  }, [])

  return (
    <MainContainer>
      <Grid container spacing={2}>
        <Grid item md={8} sm={12} xs={12}>
          <ShippingForm
            values={values}
            setValues={setValues}
            setIsSubmit={setIsSubmit}
          />
          {isSubmit}
        </Grid>
        <Grid item md={4} sm={12} xs={12}>
          <Summary
            values={values}
            legoDetails={legoDetails}
            legoParts={legoPartsDetails}
            maxHeight={true}
            isSubmit={isSubmit}
          />
        </Grid>
      </Grid>
    </MainContainer>
  )
}
