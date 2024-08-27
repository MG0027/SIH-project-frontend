import { Link } from "react-router-dom";

const Header =() => {

  return (
    <div className="Container">
      <div className="hheading">
        <img className="sih" src="Images/SIH2-removebg-preview.png"/>
        <h1>Smart Irrigation System</h1>
      </div>
      
      <nav className="list">
    
        <Link to="/">Dashboard</Link>
       <Link to="/Sensor-Status">Sensor Status</Link>
        <Link to="/Weather-info">Weather Info</Link>
        <Link to="/Alerts">Alerts</Link>
        <Link to="/Camera">Camera</Link>
        <Link to= "/Watering-control">Watering Control</Link>
    { /*<a href="#recommendations">Recommendations</a>*/}
      </nav>
    </div>

  )
}

export default Header;