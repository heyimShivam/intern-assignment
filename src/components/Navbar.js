import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-container">
        <div className="back-btn-navbar" id="back-btn-navbar">
          <FontAwesomeIcon
            icon={faAngleLeft}
            className="navbar-back-btn"
            onClick={() => {
              navigate(-1);
            }}
          />
        </div>
        <h3 className="navbar-title" id="navbar-title">
          Home
        </h3>
      </div>
    </>
  );
};

export default Navbar;
