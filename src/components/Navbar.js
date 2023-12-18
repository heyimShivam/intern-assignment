import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom';

import "./Navbar.css";

const Navbar = () => {
  const [pageName, setPageName] = useState("");
  const navigate = useNavigate();
	
  useEffect(() => {
    setPageName("Confirmation");
  }, []);


  return (
    <>
      <div className="navbar-container">
        <FontAwesomeIcon icon={faAngleLeft} className='navbar-back-btn' onClick={() => {navigate(-1);}}/>
        <h3 className="navbar-title" id="navbar-title">{pageName}</h3>
      </div>
    </>
  );
};

export default Navbar;
