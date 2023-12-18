import "./ConfirmationUserDetails.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const ConfirmationUserDetails = () => {
  const location = "Village Sai, P.O. Alampur Teh. jaisinghpus distt. kangra H.P.";
  const phoneNumber = "8219601395";

  return (
    <>
      <div className="detail-container">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="user-detail-icon"
        />

        <p className="user-detail-text"> { location } </p>
      </div>
      <div className="detail-container">
        <FontAwesomeIcon
          icon={faPhone}
          className="user-detail-icon"
        />

        <p className="user-detail-text"> { phoneNumber } </p>
      </div>
    </>
  );
};

export default ConfirmationUserDetails;
