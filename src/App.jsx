
import  Router  from './Configuration/Router'
import  { useEffect, useState } from 'react';

import './App.css'


function App() {
  // eslint-disable-next-line no-unused-vars
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    
    const authToken = localStorage.getItem('authToken');

    if (authToken) {
    
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);
  return (
    <>
      
      <Router></Router>
    
    </>
  )
}

export default App
