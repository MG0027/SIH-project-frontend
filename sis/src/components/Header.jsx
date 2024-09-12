import { Link, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoLeafOutline } from "react-icons/io5";
import { MdSensors } from "react-icons/md";
import { IoCloudSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { FaWheatAwn } from "react-icons/fa6";
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="Container" style={{ backgroundColor: 'rgb(85,113,83)', position: 'relative' }}>
     
      <span className="lang" style={styles.lang}>
        <label htmlFor="language-select"> </label>
        <select id="language-select" onChange={(e) => changeLanguage(e.target.value)} style={styles.select}>
          <option value="en"> English</option>
          <option value="hi"> हिन्दी</option>
        </select>
      </span>

    
      <span className="hheading" style={{color: 'rgb(230,229,163)', fontFamily: 'cursive'}}>
      <IoLeafOutline style={{width: '2rem', height: '2rem'}} />
        <h1>{t('CropCascade')}</h1>
      </span>

     
      <nav className="list">
        <Link to="/" style={location.pathname === "/" ? styles.activeLink : styles.link} >
          <span style={{ border: '2px solid #7D8F69', borderRadius: '8px', padding: '2px', backgroundColor: '#7D8F69'}}><FaHome style={styles.icon} /> {t('Dashboard')}</span>
        </Link>
        <Link to="/Camera" style={location.pathname === "/Camera" ? styles.activeLink : styles.link}>
          <span style={{border: '2px solid #7D8F69', borderRadius: '8px', padding: '2px', backgroundColor: '#7D8F69'}}><FaCamera style={styles.icon} />{t('camera')} </span>
        </Link>
        <Link to="/Calendar" style={location.pathname === "/Calendar" ? styles.activeLink : styles.link}>
          <span style={{border: '2px solid #7D8F69', borderRadius: '8px', padding: '2px', backgroundColor: '#7D8F69'}}><FaWheatAwn style={styles.icon} /> {t('Calendar')}</span>
        </Link>
        <Link to="/Sensor-Status" style={location.pathname === "/Stats" ? styles.activeLink : styles.link}>
          <span  style={{border: '2px solid #7D8F69', borderRadius: '8px', padding: '2px', backgroundColor: '#7D8F69'}}><MdSensors style={{...styles.icon, fontSize:'1.2rem'}}/> {t('Stats')} </span>
        </Link>
        <Link to="/Weather-info" style={location.pathname === "/Weather-info" ? styles.activeLink : styles.link}>
         <span  style={{border: '2px solid #7D8F69', borderRadius: '8px', padding: '2px', backgroundColor: '#7D8F69'}}> <IoCloudSharp style={styles.icon} /> {t('Weather Info')}</span>
        </Link>
        <Link to="/Alerts" style={location.pathname === "/Alerts" ? styles.activeLink : styles.link}>
        <span  style={{border: '2px solid #7D8F69', borderRadius: '8px', padding: '2px', backgroundColor: '#7D8F69'}}> <FaBell style={styles.icon} /> {t('Alerts')}</span>
        </Link>
      </nav>
    </div>
  );
};


const styles = {
  lang: {
    position: 'absolute',
    top: '10px',
    left: '10px',
    zIndex: 1000,
    
  },
  select: {
    fontSize: '0.8rem',
    padding: '2px 4px',
    width: '80px',
    backgroundColor: 'rgb(230,229,163)',
  },
  link: {
    textDecoration: 'none',
    color: 'rgb(230,229,163)',
  },
  activeLink: {
    textDecoration: 'none',
    color: 'rgb(230,229,163)',
    
    fontWeight: 'bold', 
   // borderBottom: '4px solid #f87930fb', 
  },
  icon: {
    paddingBottom: '0.2rem',
    color: 'rgb(230,229,163)',
  },
};

export default Header;
