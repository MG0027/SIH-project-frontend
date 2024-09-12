import React from 'react';
import SoilMoistureBarGraph from '../components/bargraph';
import WeatherDistributionPieChart from '../components/piechart';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { GiFarmer, GiFarmTractor } from "react-icons/gi";
import { FaLocationDot } from "react-icons/fa6";
import FinancialStatisticsCard from '../components/FinancialStatistics';

const Dashboard = () => {
  const { t } = useTranslation();

  return (
    <div className="dashboard-container" style={styles.container}>
      {/* Header Section */}
      <header className="dashboard-header" style={styles.header}>
        <h2 style={styles.headerTitle}>{t('Welcome User!')}</h2>
        <div style={styles.headerIcons}>
          <GiFarmer style={styles.icon} />
          <GiFarmTractor style={styles.icon} />
          <FaLocationDot style={{ ...styles.icon, fontSize: '28px' }} />
        </div>
      </header>

      {/* Cards Section */}
      <div className="cards" style={styles.cards}>
        {/* Moisture Report Card */}
        <div className="card" style={styles.card}>
          <h5 style={styles.cardTitle}>{t('Moisture Report')}</h5>
          <div style={styles.cardContent}>
            <SoilMoistureBarGraph />
          </div>
          <Link to="/sensor-status" style={styles.linkButton}>
            {t('Go To Sensor Status')}
          </Link>
        </div>

        {/* Weather Report Card */}
        <div className="card" style={styles.card}>
          <h5 style={styles.cardTitle}>{t('Weather Report')}</h5>
          <div style={styles.cardContent}>
            <WeatherDistributionPieChart />
          </div>
          <Link to="/weather-info" style={styles.linkButton}>
            {t('Go To Weather Info')}
          </Link>
        </div>
      </div>

<FinancialStatisticsCard></FinancialStatisticsCard>

      {/* Extra Information Section */}
      <div className="extra-info" style={styles.extraInfo}>
        <h4 style={styles.extraInfoTitle}>Quick Tips for Farmers</h4>
        <p style={styles.extraInfoText}>
          Ensure optimal soil moisture by checking your sensors daily and keep an eye on the weather updates for better irrigation scheduling.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    fontFamily: 'Arial, Helvetica, sans-serif',
    backgroundColor: '#f0f4f7',
    minHeight: '100vh',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 18px',
    backgroundColor: '#557151',
    borderRadius: '12px',
    marginBottom: '20px',
   boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1),inset 0 0 15px rgba(0, 0, 0, 0.1)',
   //boxShadow: 'inset 0px 10px 30px rgba(0,0,0,0.2) , 10px 0px 30px rgba(0,0,0,0.2)'
  },
  headerTitle: {
    fontSize: '26px',
    color: '#E6E5A3',
    fontWeight: '700',
    paddingTop: '10px',
  },
  headerIcons: {
    display: 'flex',
    alignItems: 'center',
  },
  icon: {
    fontSize: '32px',
    marginRight: '12px',
    color: '#E6E5A3',
  },
  cards: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '20px',
  },
  card: {
    width: '48%',
    backgroundColor: '#fff',
    padding: '25px',
    
    borderRadius: '15px',
    border: '1px solid #e0e0e0',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  
    //boxShadow: 
      //'0 10px 20px rgba(0, 0, 0, 0.1), inset 0 4px 8px rgba(0, 0, 0, 0.1)',
      boxShadow : 'inset 0px 10px 30px rgba(0,0,0,0.2) , 10px 0px 30px rgba(0,0,0,0.2)',
    
    
   // transform: 'translateY(-5px)', // Slight lift for 3D effect
    position: 'relative',
    zIndex: 1, // Ensure it's above other elements (optional)
  },
  cardTitle: {
    textAlign: 'center',
    fontWeight: '600',
    fontSize: '18px',
    color: '#333',
    marginBottom: '20px',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  linkButton: {
    backgroundColor: '#557151',
    border: 'none',
    display: 'block',
    margin: '0 auto',
    padding: '12px 24px',
    borderRadius: '40px',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#E6E5A3',
    fontWeight: 'bold',
    transition: 'background-color 0.3s ease',
  },
  extraInfo: {
    marginTop: '30px',
    padding: '25px',
    backgroundColor: '#fff',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1), inset 0 0 15px rgba(0, 0, 0, 0.1)',
    borderRadius: '15px',
  },
  extraInfoTitle: {
    marginBottom: '12px',
    color: '#557151',
    textAlign: 'center',
    fontSize: '20px',
    fontWeight: '700',
  },
  extraInfoText: {
    fontSize: '16px',
    color: '#555',
    textAlign: 'center',
  },
};

export default Dashboard;