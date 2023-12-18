import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faBars,
  faBarsStaggered,
  faDollar,
  faTruck,
  faWallet
} from "@fortawesome/free-solid-svg-icons";

import "./PaymentOptions.css";

const PaymentOptions = () => {
  const [selectOption, setSelectOption] = useState("card-info");
  let check = ['card-info', 'cod', 'upi'];

  return (
    <div className="payment-all-options">
      <div className="payment-method card-info" style={"card-info" === selectOption ? {color: "#5076ee"} : {}} onClick={() => {
          if(!check.includes("card-info")) {
            return;
          }
          if(selectOption === "card-info") {
            setSelectOption("");
            return;
          }
          setSelectOption("card-info");
          }}>
        <div className={ (!check.includes("card-info")) ? 'payment-option disabled' : 'payment-option'}>
          <div className="payment-option-elements item-1">
            <FontAwesomeIcon icon={faCreditCard} className="payment-method-icon" />
          </div>
          <div className="payment-option-elements item-2">
            <p> Debit/Credit Card</p>
            <p style={{color: "gray"}}> 1234 **** ****</p>
          </div>
          <div className="payment-option-elements item-3">
            { selectOption !== "card-info" ?
              <FontAwesomeIcon icon={faBarsStaggered} className="payment-method-icon" onClick={() => setSelectOption("card-info")}/> :
              <FontAwesomeIcon icon={faBars} className="payment-method-icon payment-method-selected" onClick={() => setSelectOption("")}/>
            }
          </div>
        </div>
      </div>

      <div className="payment-method upi" style={"upi" === selectOption ? {color: "#5076ee"} : {}} onClick={() => {
          if(!check.includes("upi")) {
            return;
          }
          if(selectOption === "upi") {
            setSelectOption("");
            return;
          }
          setSelectOption("upi");
          }}>
        <div className={ (!check.includes("upi")) ? 'payment-option disabled' : 'payment-option'}>
          <div className="payment-option-elements item-1">
            <FontAwesomeIcon icon={faDollar} className="payment-method-icon" />
          </div>
          <div className="payment-option-elements item-2">
            <p> UPI</p>
          </div>
          <div className="payment-option-elements item-3">
            { selectOption !== "upi" ?
              <FontAwesomeIcon icon={faBarsStaggered} className="payment-method-icon" /> :
              <FontAwesomeIcon icon={faBars} className="payment-method-icon payment-method-selected" />
            }
          </div>
        </div>
      </div>

      <div className="payment-method e-wallet" style={"e-wallet" === selectOption ? {color: "#5076ee"} : {}} onClick={() => {
          if(!check.includes("e-wallet")) {
            return;
          }
          if(selectOption === "e-wallet") {
            setSelectOption("");
            return;
          }
          setSelectOption("e-wallet");
          }}>
        <div className={ (!check.includes("e-wallet")) ? 'payment-option disabled' : 'payment-option'}>
          <div className="payment-option-elements item-1">
            <FontAwesomeIcon icon={faWallet} className="payment-method-icon"
            />
          </div>
          <div className="payment-option-elements item-2">
            <p>E-Wallet</p>
          </div>
          <div className="payment-option-elements item-3">
            { selectOption !== "e-wallet" ?
              <FontAwesomeIcon icon={faBarsStaggered} className="payment-method-icon" /> :
              <FontAwesomeIcon icon={faBars} className="payment-method-icon payment-method-selected" />
            }
          </div>
        </div>
      </div>

      <div className="payment-method cod"  style={"cod" === selectOption ? {color: "#5076ee"} : {}} onClick={() => {
          if(!check.includes("cod")) {
            return;
          }
          if(selectOption === "cod") {
            setSelectOption("");
            return;
          }
          setSelectOption("cod");
          }}>
        <div className={ (!check.includes("cod")) ? 'payment-option disabled' : 'payment-option'}>
          <div className="payment-option-elements item-1">
            <FontAwesomeIcon icon={faTruck} className="payment-method-icon" />
          </div>
          <div className="payment-option-elements item-2">
            <p> Cash on delivery</p>
            <p style={{color: "gray"}}> Pay directly to the driver.</p>
          </div>
          <div className="payment-option-elements item-3">
            { selectOption !== "cod" ?
              <FontAwesomeIcon icon={faBarsStaggered} className="payment-method-icon" /> :
              <FontAwesomeIcon icon={faBars} className="payment-method-icon payment-method-selected" />
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
