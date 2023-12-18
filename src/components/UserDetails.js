import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faXmarkCircle,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import useProductDetailsStore from "../store/ProductDetailsStore";

import "./UserDetails.css";

const UserDetails = (props) => {
  const [focusDetailContainer, setFocusDetailContainer] = useState("");
  const [tendigitWarning, setTendigitWarning] = useState(false);
  const [alphabetWarning, setAlphabetWarning] = useState(false);

  const location = useProductDetailsStore((state) => state.location);
  const contactNumber = useProductDetailsStore((state) => state.contactNumber);
  const updateLocation = useProductDetailsStore(
    (state) => state.updateLocation
  );
  const updateContactNumber = useProductDetailsStore(
    (state) => state.updateContactNumber
  );

  function updateValidatedLocation(inputValue) {
    updateLocation(inputValue.target.value);
  }

  function updateValidatedContactNumber(inputValue) {
    if (
      !(
        inputValue.nativeEvent.data >= "0" && inputValue.nativeEvent.data <= "9"
      )
    ) {
      setAlphabetWarning(true);
    }

    if (inputValue.target.value.length >= 11) {
      setTendigitWarning(true);
      return;
    }

    if (
      inputValue.nativeEvent.data >= "0" &&
      inputValue.nativeEvent.data <= "9"
    ) {
      updateContactNumber(inputValue.target.value);
      return;
    }
  }

  return (
    <>
      <div
        className={
          focusDetailContainer === "location"
            ? "detail-container focus"
            : "detail-container"
        }
      >
        <FontAwesomeIcon icon={faLocationDot} className="user-detail-icon" />
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

      <div
        className={
          focusDetailContainer === "contact-number"
            ? "detail-container focus"
            : "detail-container"
        }
      >
        <FontAwesomeIcon icon={faPhone} className="user-detail-icon" />
        <input
          type="tel"
          placeholder="Enter Contact number..."
          pattern="[0-9]{10}"
          value={contactNumber}
          onChange={(value) => {
            updateValidatedContactNumber(value);
          }}
          id="contact-number"
          className="user-detail-text"
          required
        />
      </div>

      <div className="warnings-toast-container">
        {tendigitWarning ? (
          <div className="warning-toast-message">
            You can only enter 10 digits.
            <span className="warning-toast-message-xmark">
              <FontAwesomeIcon
                icon={faXmarkCircle}
                onClick={() => {
                  setTendigitWarning(!tendigitWarning);
                }}
              ></FontAwesomeIcon>
            </span>
          </div>
        ) : (
          <></>
        )}

        {alphabetWarning ? (
          <div className="warning-toast-message">
            You can only enter numbers i.e. 0-9.
            <span className="warning-toast-message-xmark">
              <FontAwesomeIcon
                icon={faXmarkCircle}
                onClick={() => {
                  setAlphabetWarning(!alphabetWarning);
                }}
              ></FontAwesomeIcon>
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default UserDetails;
