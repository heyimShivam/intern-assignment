import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import useProductDetailsStore from "../store/ProductDetailsStore";

import "./ConfirmationUserDetails.css";

const ConfirmationUserDetails = () => {
  const location = useProductDetailsStore((state) => state.location);
  const contactNumber = useProductDetailsStore((state) => state.contactNumber);

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

        <p className="user-detail-text"> { contactNumber } </p>
      </div>
    </>
  );
};

export default ConfirmationUserDetails;
