import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSoilMoisture, setSunlight } from '../store/sensorslice';

const Sensor = () => {
  useEffect(() => {
    document.body.className = 'sensor-background';
    return () => {
      document.body.className = ''; // Clean up by resetting class when unmounted
    };
  }, []);
  const dispatch = useDispatch();
  const soilMoisture = useSelector((state) => state.sensor.soilMoisture);
  const sunlight = useSelector((state) => state.sensor.sunlight);

  
  useEffect(() => {
    const fetchSensorData = () => {
      // Replace with actual API calls
      const moistureLevel = 45; // Ex
      const sunlightLevel = 80; // Ex

      dispatch(setSoilMoisture(moistureLevel));
      dispatch(setSunlight(sunlightLevel));
    };

    fetchSensorData();
  }, [dispatch]);

  return (
    <div className='sensor-h' style={{ padding: '20px' }}>
      <h2>Sensor Status</h2>
      <div className='Sensor' style={{ marginBottom: '10px' }}>
        <strong>Soil Moisture Level:</strong> {soilMoisture}%
      </div>
      <div className='Sensor'>
        <strong>Sunlight:</strong> {sunlight}%
      </div>
    </div>
  );
};

export default Sensor;