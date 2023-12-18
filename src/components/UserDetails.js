import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faXmarkCircle, faPhone } from "@fortawesome/free-solid-svg-icons";

import "./UserDetails.css";

const UserDetails = () => {
  const [location, setLocation] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [focusDetailContainer, setFocusDetailContainer] = useState("");

  function updateValidatedLocation(inputValue) {
    setLocation(inputValue.target.value);
  }

  function updateValidatedContactNumber(inputValue) {
    if (inputValue.target.value.length === 11) {
      // Warning 10 digit Phone number error.
      return;
    }

    if (
      inputValue.nativeEvent.data >= "0" &&
      inputValue.nativeEvent.data <= "9"
    ) {
      setContactNumber(inputValue.target.value);
      return;
    }

    // Warning a-z.
  }

  return (
    <>
      <div className={focusDetailContainer==="location" ? "detail-container focus" : "detail-container"}>
        <FontAwesomeIcon
          icon={faLocationDot}
          className="user-detail-icon"
        />
        <input
          name="Location"
          width="fit-content"
          placeholder="Enter Location..."
          value={location}
          className="user-detail-text"
          onChange={(value) => {
            updateValidatedLocation(value);
          }}
          required
        />
      </div>

      <div className={focusDetailContainer==="contact-number" ? "detail-container focus" : "detail-container"}>
        <FontAwesomeIcon icon={faPhone} className="user-detail-icon" />
        <input
          type="tel"
          placeholder="Enter Contact number..."
          pattern="[0-9]{10}"
          value={contactNumber}
          onChange={(value) => {
            updateValidatedContactNumber(value);
          }}
          className="user-detail-text"
          required
        />
      </div>

      <div className="warnings-toast-container">
        <div className="warning-toast-message">
          Enter proper Promocode.
          <span className="warning-toast-message-xmark">
            <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
          </span>
        </div>
        <div className="warning-toast-message">
          Enter proper Promocode.
          <span className="warning-toast-message-xmark">
            <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
          </span>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
