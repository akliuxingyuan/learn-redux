import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'akliuxingyuan' },
  { id: '2', name: 'Usain Bolt' },
  { id: '3', name: 'Noah lehrs' },
  { id: '1', name: 'David rudissa' },
  { id: '4', name: 'Kenenisa Bekele' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export default usersSlice.reducer;
