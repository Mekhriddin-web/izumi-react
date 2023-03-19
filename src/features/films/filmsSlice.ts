import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
import { fetchCount } from './filmsAPI';

export interface FilmsState {
  value: number;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: FilmsState = {
  value: 0,
  status: 'idle',
};

// export const incrementAsync = createAsyncThunk(
//   'counter/fetchCount',
//   async (amount: number) => {
//     const response = await fetchCount(amount);
//     return response.data;
//   }
// );

export const filmsSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
  // extraReducers: builder => {
  //   builder
  //     .addCase(incrementAsync.pending, state => {
  //       state.status = 'loading';
  //     })
  //     .addCase(incrementAsync.fulfilled, (state, action) => {
  //       state.status = 'idle';
  //       state.value += action.payload;
  //     })
  //     .addCase(incrementAsync.rejected, state => {
  //       state.status = 'failed';
  //     });
  // },
});

export const { increment, decrement, incrementByAmount } = filmsSlice.actions;

export default filmsSlice.reducer;
