import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

import "./Navbar.css";

const Navbar = () => {
  return (
    <>
      <div className="navbar-container">
        <FontAwesomeIcon icon={faAngleLeft} className='navbar-back-btn'/>
        <h3 className="navbar-title">Checkout</h3>
      </div>

      <div>
      </div>
    </>
  );
};

export default Navbar;
