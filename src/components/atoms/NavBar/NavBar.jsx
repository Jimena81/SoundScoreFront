import recordPlayerLogo from '../../../assets/images/recordPlayerLogo.jpg'
import "./navBar.css"
import  { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  // eslint-disable-next-line no-unused-vars
  const [authToken, setAuthToken] = useState(null); 
  const navigateTo = useNavigate();

  useEffect(() => {
    
    const storedAuthToken = localStorage.getItem('authToken');

    if (storedAuthToken) {
      
      setIsLoggedIn(true);
      
      setAuthToken(storedAuthToken);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  
  
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    document.cookie = 'authToken=; expires=Thu, 01 Jan 2025 00:00:00 UTC; path=/;';
    setAuthToken(null);
    navigateTo('/')
    setIsLoggedIn(false)
    console.log("Usuario deslogueado");

  };

  return (
    <div className="navbar">
      <div className="logo w-12">
        <a href="/NewRealeses">
        <img src={recordPlayerLogo} alt="Logo" /></a>
      </div>
      {isLoggedIn ? (
        <button onClick={handleLogout} className="logout-button">Logout</button>
      ) : (
        <div className="not-logged-in-message">Good Bye!</div>
      )}
    </div>
  );
}

export default NavBar;
