import { createSlice } from '@reduxjs/toolkit';

export const sensorSlice = createSlice({
  name: 'sensor',
  initialState: {
    soilMoisture: 0,
    sunlight: 0,
    Humidity:0,
    Water:0,
  },
  reducers: {
    setSoilMoisture: (state, action) => {
      state.soilMoisture = action.payload;
    },
    setSunlight: (state, action) => {
      state.sunlight = action.payload;
    },
    setHumidity:(state, action)=>{
      state.Humidity =action.payload;
    },
    setWater:(state,action)=>{
     state.Water = action.payload;
    },
  },
});

export const { setSoilMoisture, setSunlight,setHumidity, setWater } = sensorSlice.actions;
export default sensorSlice.reducer;