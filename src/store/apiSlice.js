import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { API_KEY } from '../constants/env'

export const fetchSymbolsData = createAsyncThunk('api/symbol', async () => {
  const response = await fetch(`https://api.twelvedata.com/stocks?apikey=${API_KEY}&source=docs&exchange=NYSE`)
  return response.json()
})

export const fetchActionData = createAsyncThunk('api/actionData', async ({ symbol, interval, startDate, endDate }) => {
  const response = await fetch(`https://api.twelvedata.com/time_series?apikey=${API_KEY}&symbol=${symbol}&interval=${interval}&start_date=${startDate}&end_date=${endDate}`)
  return response.json()
})

const initialState = {
  symbols: [],
  symbolsLoading: false,
  symbolsError: '',
  actionData: [],
  actionDataLoading: false,
  actionDataError: '',
  selectedSymbols: []
}

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setSelectedSymbol: (state, action) => {
      state.selectedSymbols.push(action.payload)
    },
    deleteSelectedSymbol: (state, action) => {
      state.selectedSymbols = state.selectedSymbols.filter(value => value.symbol !== action.payload.symbol)
    }
  },
  extraReducers: ({ addCase }) => {
    addCase(fetchSymbolsData.fulfilled, (state, action) => {
      state.symbols = action.payload.data
      state.symbolsLoading = false
    })
    addCase(fetchSymbolsData.pending, (state) => {
      state.symbolsLoading = true
    })
    addCase(fetchSymbolsData.rejected, (state, action) => {
      state.symbolsLoading = false
      state.symbolsError = action.error.message
    })
    addCase(fetchActionData.fulfilled, (state, action) => {
      state.actionData = action.payload
      state.actionDataLoading = false
    })
    addCase(fetchActionData.pending, (state) => {
      state.actionDataLoading = true
    })
    addCase(fetchActionData.rejected, (state, action) => {
      state.actionDataLoading = false
      state.actionDataError = action.error.message
    })
  }
})

export const { setSelectedSymbol, deleteSelectedSymbol } = apiSlice.actions

export default apiSlice.reducer