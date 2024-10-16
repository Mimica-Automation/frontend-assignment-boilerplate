import { createSlice } from '@reduxjs/toolkit';

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface State {}

const initialState: State = {};

const slice = createSlice({
  name: 'tree',

  initialState,

  reducers: {},

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  extraReducers: builder => {},
});

export const { actions, reducer } = slice;
