import { useEffect } from "react";
import { Link } from "react-router-dom";

import "./Home.css";

const HomePage = () => {
  useEffect(() => {
    document.getElementById("navbar-title").innerText = "Home";
    // to delete back button on the home page.
    document.getElementById("back-btn-navbar").style.display = "none";

    return () => {
      // to view back button on other pages.
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
        <div className="ocean">
          <div className="wave"></div>
          <div className="wave"></div>
          <div className="wave"></div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
