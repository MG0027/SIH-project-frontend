import { configureStore } from "@reduxjs/toolkit";
import weatherReducer from "./weatherslice"; 
import sensorReducer from "./sensorslice";

const store = configureStore({
  reducer: {
    weather: weatherReducer, 
    sensor: sensorReducer,
  },
});

export default store;