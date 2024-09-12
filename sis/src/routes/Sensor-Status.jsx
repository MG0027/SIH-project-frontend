import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHumidity, setSoilMoisture, setSunlight, setWater } from '../store/sensorslice';

const Sensor = () => {
  useEffect(() => {
    document.body.className = 'sensor-background';
    return () => {
      document.body.className = ''; 
    };
  }, []);

  const dispatch = useDispatch();
  const soilMoisture = useSelector((state) => state.sensor.soilMoisture);
  const sunlight = useSelector((state) => state.sensor.sunlight);
  const humidity = useSelector((state) => state.sensor.Humidity);
  const water = useSelector((state) => state.sensor.Water);
  
  useEffect(() => {
    const fetchSensorData = () => {
      // Replace with actual API calls
      const moistureLevel = 60; // Example value
      const sunlightLevel = "NO"; // Example value
      const humidityValue = 20; // Example value
      const waterStatus = "NO"; // Example value

      dispatch(setSoilMoisture(moistureLevel));
      dispatch(setSunlight(sunlightLevel));
      dispatch(setHumidity(humidityValue));
      dispatch(setWater(waterStatus));
    };

    fetchSensorData();
  }, [dispatch]);

  return (
    <div className='sensor-container' style={styles.container}>
      <h2 style={styles.title}>Sensor Status</h2>
      <div className='sensor-card' style={styles.card}>
        <strong style={styles.label}>Soil Moisture Level:</strong>
        <p style={styles.value}>{soilMoisture}%</p>
      </div>
      <div className='sensor-card' style={styles.card}>
        <strong style={styles.label}>Sunlight:</strong>
        <p style={styles.value}>{sunlight}</p>
      </div>
      <div className='sensor-card' style={styles.card}>
        <strong style={styles.label}>Humidity:</strong>
        <p style={styles.value}>{humidity}%</p>
      </div>
      <div className='sensor-card' style={styles.card}>
        <strong style={styles.label}>Water:</strong>
        <p style={styles.value}>{water}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    backgroundColor: '#f5f5f5', // Light background color
    color: '#333', // Dark text color
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '28px',
    color: '#333', // Dark text for the title
    marginBottom: '20px',
  },
  card: {
    backgroundColor: '#fff', // White card background
    padding: '15px',
   
    border: '1px solid #ddd', // Light border color
    //boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    width: '40%',
    marginBottom: '10px',
 
    
    
    borderRadius: '15px',
   
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  
    //boxShadow: 
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1), inset 0 4px 8px rgba(0, 0, 0, 0.1)',
      boxShadow : 'inset 0px 10px 30px rgba(0,0,0,0.2) , 10px 0px 30px rgba(0,0,0,0.2)',
    
    
   transform: 'translateY(-5px)', // Slight lift for 3D effect
    position: 'relative',
    
  },
  label: {
    fontWeight: 'bold',
    fontSize: '18px',
  },
  value: {
    fontSize: '16px',
    color: '#555', // Slightly lighter text color
  },
};

export default Sensor;
