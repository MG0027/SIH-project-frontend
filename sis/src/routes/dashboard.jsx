import { useEffect } from "react";

const Dashboard =() => {
  useEffect(() => {
    document.body.className = 'dashboard-background';
    return () => {
      document.body.className = ''; // Clean up by resetting class when unmounted
    };
  }, []);
  return(
    <div className="dashboard"> <div className="intro" >
      <span className="line"><h1>Welcome to Smart Irrigation System</h1></span>
        <p>Optimize your water usage and boost crop yields with our intelligent irrigation solutions.</p></div></div> 
  )
}

export default Dashboard;