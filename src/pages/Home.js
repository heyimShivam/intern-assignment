import { Link } from "react-router-dom";
import "./Home.css";

const HomePage = () => {
  return (
    <>
      <div className="main-div">
        <Link className="groww-assignment-btn" to="/checkout">
          Groww Assignemnt
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
