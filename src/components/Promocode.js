import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

import "./Promocode.css";

const Promocode = () => {
  return (
    <div className="promocode">
      <p className="subheading-checkout">Promo Code</p>
      <div className="promocode-container">
        <input
          name="Location"
          width="fit-content"
          placeholder="Enter Promo Code here..."
          className="checkout-promocode-text"
          required
        />
        <p className="checkout-promocode-apply-btn">Apply</p>
      </div>

      <div className="warnings-toast-container">
        <span className="warning-toast-message">
          Enter proper Promocode.
          <span className="warning-toast-message-xmark">
            <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
          </span>
        </span>
        <span className="warning-toast-message">
          Enter proper Promocode.
          <span className="warning-toast-message-xmark">
            <FontAwesomeIcon icon={faXmarkCircle}></FontAwesomeIcon>
          </span>
        </span>
      </div>
    </div>
  );
};

export default Promocode;
