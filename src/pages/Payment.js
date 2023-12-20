import { Link } from "react-router-dom";
import { useEffect } from "react";

import useProductDetailsStore from "../store/ProductDetailsStore";
import PaymentOptions from "../components/PaymentOptions";

import "./Payment.css";

const PaymentPage = () => {
  const totalAmount = useProductDetailsStore((state) => state.totalAmount);
  const adminFee = useProductDetailsStore((state) => state.adminFee);

  useEffect(() => {
    document.getElementById("navbar-title").innerText = "Payment";
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div className="container">
        <h3 className="heading">Choose Payment Method</h3>
        <PaymentOptions />
        <div className="make-payment-section">
          <p className="admin-fee-make-payment-section payment-details">
            Admin Fee <span>{adminFee.toFixed(3)}</span>
          </p>
          <p className="total-fee-make-payment-section payment-details">
            Total <span>{totalAmount.toFixed(3)}</span>
          </p>
          <Link className="make-payment-btn-inside" to="/order-confirmation">
            Make a payment
          </Link>
        </div>
      </div>
    </>
  );
};

export default PaymentPage;
