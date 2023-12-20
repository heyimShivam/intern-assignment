import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const HomePage = () => {
  useEffect(() => {
    document.getElementById("back-btn-navbar").style.display = "none";
    document.getElementById("navbar-title").innerText = "Home";
    return () => {
      document.getElementById("back-btn-navbar").style.display = "block";
    };
  }, []);

  return (
    <>
      <div className="main-div">
        <Link className="groww-assignment-btn" to="/checkout">
          View Assignment
        </Link>
      </div>
      <div className="end-div">
        <div class="ocean">
          <div class="wave"></div>
          <div class="wave"></div>
          <div class="wave"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
