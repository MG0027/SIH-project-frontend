import { createSlice } from '@reduxjs/toolkit';

export const sensorSlice = createSlice({
  name: 'sensor',
  initialState: {
    soilMoisture: 0,
    sunlight: 0,
  },
  reducers: {
    setSoilMoisture: (state, action) => {
      state.soilMoisture = action.payload;
    },
    setSunlight: (state, action) => {
      state.sunlight = action.payload;
    },
  },
});

export const { setSoilMoisture, setSunlight } = sensorSlice.actions;
export default sensorSlice.reducer;