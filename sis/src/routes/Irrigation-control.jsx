import React from 'react';

import Calendars from '../components/calendar';
import { useSelector } from 'react-redux';

const Water = ()=>{

  const soilMoisture = useSelector((state) => state.sensor.soilMoisture);
  const irrigationMessage =
  soilMoisture < 30
    ? "Moisture is low, irrigation needed."
    : "No need for irrigation, moisture is sufficient.";

 
 
   
    return (
      <div style={{display: 'flex'}}>
       
      <Calendars></Calendars> 
      <div style={styles.card}>
      <h2 style={styles.heading}>Irrigation Status</h2>
      <p style={styles.paragraph}>Moisture Level: {soilMoisture}%</p>

      <p style={styles.paragraph}>Chance of Rain: 30%</p>
      <h6 style={{ marginTop: '20px', textAlign: 'center'}}> Next Irrigation Date: 10/07 </h6>
     
    </div>
  
      </div>
    );
    
    
    
 }
 const styles = {
  card: {
    borderRadius: '8px',       
    padding: '10px',           
    maxWidth: '300px',         
    boxShadow: '2px 2px 10px rgba(0, 0, 0, 0.1)', 
    backgroundColor: '#fff',  
    marginTop: '20px',
    marginLeft: '50px'  
  },
  heading: {
    textAlign: 'center',    
    marginBottom: '20px',     
  },
  paragraph: {
    fontSize: '16px',       
    marginBottom: '8px', 
    
  },
};




export default Water;