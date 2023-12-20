import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faBars,
  faBarsStaggered,
  faDollar,
  faTruck,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

import useProductDetailsStore from "../store/ProductDetailsStore";

import "./PaymentOptions.css";

const PaymentOptions = () => {
  const paymentMethod = useProductDetailsStore((state) => state.paymentMethod);
  const updatePaymentMethod = useProductDetailsStore(
    (state) => state.updatePaymentMethod
  );
  const detailsProducts = useProductDetailsStore(
    (state) => state.detailsProducts
  );

  return (
    <div className="payment-all-options">
      <div
        className="payment-method card-info"
        style={"CARDS" === paymentMethod ? { color: "#5076ee" } : {}}
        onClick={() => {
          if (!detailsProducts.paymentMethods?.includes("CARDS")) {
            return;
          }
          if (paymentMethod === "CARDS") {
            updatePaymentMethod("");
            return;
          }
          updatePaymentMethod("CARDS");
        }}
      >
        <div
          className={
            !detailsProducts.paymentMethods?.includes("CARDS")
              ? "payment-option disabled"
              : "payment-option"
          }
        >
          <div className="payment-option-elements item-1">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="payment-method-icon"
            />
          </div>
          <div className="payment-option-elements item-2">
            <p> Debit/Credit Card</p>
            <p style={{ color: "gray" }}> 1234 **** ****</p>
          </div>
          <div className="payment-option-elements item-3">
            {paymentMethod !== "CARDS" ? (
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className="payment-method-icon"
                onClick={() => updatePaymentMethod("CARDS")}
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="payment-method-icon payment-method-selected"
                onClick={() => updatePaymentMethod("")}
              />
            )}
          </div>
        </div>
      </div>

      <div
        className="payment-method upi"
        style={"UPI" === paymentMethod ? { color: "#5076ee" } : {}}
        onClick={() => {
          if (!detailsProducts.paymentMethods?.includes("UPI")) {
            return;
          }
          if (paymentMethod === "UPI") {
            updatePaymentMethod("");
            return;
          }
          updatePaymentMethod("UPI");
        }}
      >
        <div
          className={
            !detailsProducts.paymentMethods?.includes("UPI")
              ? "payment-option disabled"
              : "payment-option"
          }
        >
          <div className="payment-option-elements item-1">
            <FontAwesomeIcon icon={faDollar} className="payment-method-icon" />
          </div>
          <div className="payment-option-elements item-2">
            <p> UPI</p>
          </div>
          <div className="payment-option-elements item-3">
            {paymentMethod !== "UPI" ? (
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className="payment-method-icon"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="payment-method-icon payment-method-selected"
              />
            )}
          </div>
        </div>
      </div>

      <div
        className="payment-method e-wallet"
        style={"E-WALLET" === paymentMethod ? { color: "#5076ee" } : {}}
        onClick={() => {
          if (!detailsProducts.paymentMethods?.includes("E-WALLET")) {
            return;
          }
          if (paymentMethod === "E-WALLET") {
            updatePaymentMethod("");
            return;
          }
          updatePaymentMethod("E-WALLET");
        }}
      >
        <div
          className={
            !detailsProducts.paymentMethods?.includes("E-WALLET")
              ? "payment-option disabled"
              : "payment-option"
          }
        >
          <div className="payment-option-elements item-1">
            <FontAwesomeIcon icon={faWallet} className="payment-method-icon" />
          </div>
          <div className="payment-option-elements item-2">
            <p>E-Wallet</p>
          </div>
          <div className="payment-option-elements item-3">
            {paymentMethod !== "E-WALLET" ? (
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className="payment-method-icon"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="payment-method-icon payment-method-selected"
              />
            )}
          </div>
        </div>
      </div>

      <div
        className="payment-method cod"
        style={"COD" === paymentMethod ? { color: "#5076ee" } : {}}
        onClick={() => {
          if (!detailsProducts.paymentMethods?.includes("COD")) {
            return;
          }
          if (paymentMethod === "COD") {
            updatePaymentMethod("");
            return;
          }
          updatePaymentMethod("COD");
        }}
      >
        <div
          className={
            !detailsProducts.paymentMethods?.includes("COD")
              ? "payment-option disabled"
              : "payment-option"
          }
        >
          <div className="payment-option-elements item-1">
            <FontAwesomeIcon icon={faTruck} className="payment-method-icon" />
          </div>
          <div className="payment-option-elements item-2">
            <p> Cash on delivery</p>
            <p style={{ color: "gray" }}> Pay directly to the driver.</p>
          </div>
          <div className="payment-option-elements item-3">
            {paymentMethod !== "COD" ? (
              <FontAwesomeIcon
                icon={faBarsStaggered}
                className="payment-method-icon"
              />
            ) : (
              <FontAwesomeIcon
                icon={faBars}
                className="payment-method-icon payment-method-selected"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
