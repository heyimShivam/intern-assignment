import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import "./UserDetails.css";

const UserDetails = () => {
  const [location, setLocation] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  function updateValidatedLocation(inputValue) {
    setLocation(inputValue.target.value);
  }

  function updateValidatedContactNumber(inputValue) {
    if (inputValue.target.value.length === 10) {
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
      <div className="location-container">
        <FontAwesomeIcon
          icon={faLocationDot}
          className="checkout-location-dot"
        />
        <input
          name="Location"
          width="fit-content"
          placeholder="Enter Location..."
          value={location}
          className="checkout-location-text"
          onChange={(value) => {
            updateValidatedLocation(value);
          }}
          required
        />
      </div>
      <div className="contact-number-container">
        <FontAwesomeIcon icon={faPhone} className="contact-number-ico" />
        <input
          type="tel"
          placeholder="Enter Contact number..."
          pattern="[0-9]{10}"
          value={contactNumber}
          onChange={(value) => {
            updateValidatedContactNumber(value);
          }}
          className="contact-number-text"
          required
        />
      </div>
    </>
  );
};

export default UserDetails;
