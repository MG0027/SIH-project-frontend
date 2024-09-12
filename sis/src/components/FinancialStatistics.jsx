import React from 'react';

const FinancialStatisticsCard = () => {
  return (
    <div style={styles.card}>
      <h5 style={styles.cardTitles}>Financial Statistics</h5>
      <div style={styles.achievementSection}>
        <div style={styles.progressRingContainer}>
          <svg width="70" height="70" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="#e0e0e0"
              strokeWidth="10"
              fill="transparent"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="rgb(85,113,83)"
              strokeWidth="10"
              fill="transparent"
              strokeDasharray="282.74"
              strokeDashoffset="61.80" // Adjust this value based on your percentage
              strokeLinecap="round"
              style={{ transition: 'stroke-dashoffset 0.5s ease' }}
            />
          </svg>
          <div style={styles.achievementText}>
            <span style={styles.achievementPercentage}>78%</span>
           
          </div>
        </div>
      </div>
      <div style={styles.statistics}>
        <div style={styles.statItem}>
          <div style={styles.statValue}>64 Lakh</div>
          <span style={styles.statLabel}>Current profit</span>
        </div>
        <div style={styles.statItem}>
          <div style={styles.statValue}>82 Lakh</div>
          <span style={styles.statLabel}>Expected profit</span>
        </div>
      </div>
    </div>
  );
};

const styles = {
  card: {
    marginTop: '35px',
    width: '48%',
    backgroundColor: '#fff',
    padding: '25px',
    
    borderRadius: '15px',
    border: '1px solid #e0e0e0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  
    //boxShadow: 
      //'0 10px 20px rgba(0, 0, 0, 0.1), inset 0 4px 8px rgba(0, 0, 0, 0.1)',
      boxShadow : 'inset 0px 10px 30px rgba(0,0,0,0.2) , 10px 0px 30px rgba(0,0,0,0.2)',
    
    
     // Slight lift for 3D effect
    position: 'relative',
    zIndex: 1, // Ensure it's above other elements (optional)
  },
  cardTitles: {
    fontSize: '18px',
    fontWeight: '600',
    marginBottom: '20px',
    color: '#333',
    textAlign: 'center',
  },
  achievementSection: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '20px',
  },
  progressRingContainer: {
    position: 'relative',
  },
  achievementText: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    textAlign: 'center',
  },
  achievementPercentage: {
    fontSize: '20px',
    fontWeight: 'bold',
    color: 'rgb(85,113,83)',
  },
  statistics: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '10px',
  },
  statItem: {
    textAlign: 'center',
  },
  statValue: {
    fontSize: '16px',
    fontWeight: 'bold',
    color: '#333',
  },
  statLabel: {
    fontSize: '14px',
    color: '#666',
  },
  /*hoverEffect: {
    '&:hover': {
      transform: 'translateY(-5px)', // Moves the card up slightly
      boxShadow: 'inset 0px 10px 30px rgba(0,0,0,0.2), 0px 10px 30px rgba(0,0,0,0.3)', // Increased shadow for depth
    },
  },*/
};

export default FinancialStatisticsCard;