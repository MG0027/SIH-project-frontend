import { createSlice } from "@reduxjs/toolkit";

const weatherSlice = createSlice({
  name: 'weather',
  initialState: null, 
  reducers: {
    weatherReports: (state, action) => {
      return action.payload; 
    }
  }
});

export const { weatherReports } = weatherSlice.actions;
export default weatherSlice.reducer; 