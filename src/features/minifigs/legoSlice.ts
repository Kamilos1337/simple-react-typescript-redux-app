import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from './../../app/store'
import {
  buyLego,
  fetchLego,
  fetchLegoDetails,
  fetchLegoPartsDetails
} from './legoApi'
import Minifigs from './legoInterfaces'

export interface StateInterface {
  legos: Minifigs[]
  partsDetails: any[]
  details: {}
}

const initialState: StateInterface = {
  legos: [],
  partsDetails: [],
  details: {}
}

export const getLego = createAsyncThunk('minifigs/getLego', async () => {
  const response = await fetchLego()
  return response.data
})
export const getLegoDetails = createAsyncThunk(
  'minifigs/getLegoDetails',
  async (elem: string) => {
    const response = await fetchLegoDetails(elem)
    return response.data
  }
)
export const getLegoPartsDetails = createAsyncThunk(
  'minifigs/getLegoPartsDetails',
  async (elem: string) => {
    const response = await fetchLegoPartsDetails(elem)
    return response.data
  }
)

export const doPurchase = createAsyncThunk(
  'minifigs/doPurchase',
  async (body: {}) => {
    const response = await buyLego(body)
    return response.data
  }
)

export const legoSlice = createSlice({
  name: 'legos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getLego.fulfilled, (state, action) => {
        state.legos = action.payload.results
      })
      .addCase(getLegoPartsDetails.fulfilled, (state, action) => {
        state.partsDetails = action.payload.results
      })
      .addCase(getLegoDetails.fulfilled, (state, action) => {
        state.details = action.payload
      })
  }
})

export const getLegos: (state: RootState) => void = (state: RootState) =>
  state.minifigs.legos
export const getLegosDetails: (state: RootState) => void = (state: RootState) =>
  state.minifigs.details
export const getLegosPartsDetails: (state: RootState) => void = (
  state: RootState
) => state.minifigs.partsDetails

export default legoSlice.reducer
