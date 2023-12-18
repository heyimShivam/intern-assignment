import { Link } from "react-router-dom";

import useProductDetailsStore from "../store/ProductDetailsStore";
import PaymentOptions from "../components/PaymentOptions";

import "./Payment.css";

const PaymentPage = () => {
  const orderAmountDetails = useProductDetailsStore(
    (state) => state.orderAmountDetails
  );

  return (
    <>
      <div className="container">
        <h3 className="heading">Choose Payment Method</h3>
        <PaymentOptions />
        <div className="make-payment-section">
          <p className="admin-fee-make-payment-section payment-details">
            Admin Fee <span>{(orderAmountDetails.adminFee).toFixed(3)}</span>
          </p>
          <p className="total-fee-make-payment-section payment-details">
            Total <span>{(orderAmountDetails.totalAmount).toFixed(3)}</span>
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
