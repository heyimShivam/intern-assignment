import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import "./Navbar.css";

const Navbar = () => {
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    setPageName("Payment")
  }, []);
  
  return (
    <>
      <div className="navbar-container">
        <FontAwesomeIcon icon={faAngleLeft} className='navbar-back-btn'/>
        <h3 className="navbar-title">{pageName}</h3>
      </div>

      <div>
      </div>
    </>
  );
};

export default Navbar;
