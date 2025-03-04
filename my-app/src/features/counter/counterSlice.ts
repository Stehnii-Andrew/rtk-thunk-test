import type { PayloadAction } from "@reduxjs/toolkit"
import { createAppSlice } from "../../app/createAppSlice"
import { createAsyncThunk, createSlice, isFulfilled } from '@reduxjs/toolkit'
import axios from 'axios'

const fetchUserById = createAsyncThunk(
  'users/fetchByIdStatus',
  async () => {
    const response = await axios.get('http://localhost:4000');
    return response.data
  },
)

interface CounterState {
  value: string
}

const initialState = { value: "ещещещ відро", status: "guest" }

const counterSlice = createAppSlice({
  name: 'counter',
  initialState,
  reducers: create => ({
    increment: create.reducer((state) => {
      state.value = "ещещещ канапка"
    }),
    decrement: create.reducer((state) => {
      state.value = "ещещещ чувачок"
    }),
    fetcher: create.asyncThunk(async (value) => {
        const { data } = await axios.get('http://localhost:4000');
        console.log(value);
        throw new Error('wrong fetch');
      }, {
        pending: state => {
          state.status = 'in_progress';
        },
        fulfilled: (state, action) => {
          console.log('action: ', state, action)
          state.status = 'auth';
        },
        rejected: (state, action) => {
          console.log('rejected: ', action);
          state.status = 'guest';
        },
      }
    )
  })
})

export const { increment, decrement, fetcher } = counterSlice.actions;
export default counterSlice