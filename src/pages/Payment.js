import { Link } from "react-router-dom";

import PaymentOptions from "../components/PaymentOptions";

import "./Payment.css";

const PaymentPage = () => {
  return (
    <>
      <div className="container">
        <h3 className="heading">Choose Payment Method</h3>
        <PaymentOptions />
        <div className="make-payment-section">
          <p className="admin-fee-make-payment-section payment-details">
            Admin Fee <span>{(0).toFixed(3)}</span>
          </p>
          <p className="total-fee-make-payment-section payment-details">
            Total <span>{(5000).toFixed(3)}</span>
          </p>
          <Link className="make-payment-btn-inside" to="/payment">
            Make a payment
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
