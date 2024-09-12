import Alerts from '../routes/Alerts';

import React from 'react';
 // Ensure the path is correct based on your folder structure

const AlertSection =() => {
  const alerts = [
    { id: 1, message: 'Soil moisture is below the optimal level.', type: 'warning', timestamp: '2024-09-03 08:30 AM' },
    { id: 2, message: 'Scheduled watering at 09:00 AM.', type: 'info', timestamp: '2024-09-03 08:00 AM' },
    { id: 3, message: 'Water tank level is low.', type: 'danger', timestamp: '2024-09-02 07:45 PM' },
  ];

  return(<> <div className="alert-section">
    {alerts.map(alert => (
      <Alerts key={alert.id} message={alert.message} type={alert.type} timestamp={alert.timestamp} />
    ))}
  </div></>)
}

export default AlertSection;