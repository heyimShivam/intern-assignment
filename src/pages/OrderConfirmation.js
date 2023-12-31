import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faDollar,
  faTruck,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

import useProductDetailsStore from "../store/ProductDetailsStore";
import CheckoutOrderList from "../components/CheckoutOrderList";
import ConfirmationUserDetails from "../components/ConfirmationUserDetails";

import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  const paymentMethod = useProductDetailsStore((state) => state.paymentMethod);
  const totalAmount = useProductDetailsStore((state) => state.totalAmount);
  const deliveryFee = useProductDetailsStore((state) => state.deliveryFee);
  const orderAmount = useProductDetailsStore((state) => state.orderAmount);
  const discount = useProductDetailsStore((state) => state.discount);
  const orderDetailsProducts = useProductDetailsStore(
    (state) => state.orderDetailsProducts
  );
  const [randomPage, setRandomPage] = useState(0);

  const orderConfirmation = [
    {
      text: "Order has been placed successfully.",
      class: "success",
    },
    {
      text: "We are processing your order.",
      class: "processing",
    },
    {
      text: "Payment failed, Please try again.",
      class: "failed",
    },
  ];

  useEffect(() => {
    // getting random value to showcase three cases success,
    //  processing, failed of order confirmation.
    setRandomPage(Math.floor(Math.random() * (2 - 0 + 1) + 0));

    // Scroll to the page top.
    window.scrollTo(0, 0);

    document.getElementById("navbar-title").innerText = "Confirmation";
  }, []);

  return (
    <>
      <div className="outer-container">
        <div
          className={
            "order-confirmation " + orderConfirmation[randomPage].class
          }
        >
          <div className="order-confirmation-text">
            {orderConfirmation[randomPage].text}
          </div>
        </div>
      </div>

      <div className="container">
        <div>
          <h3 className="heading">Delivery Detail</h3>
          <ConfirmationUserDetails />
          <CheckoutOrderList
            checkoutPage={false}
            productDetails={orderDetailsProducts}
          />
        </div>

        <div>
          <h3 className="heading">Order Summary</h3>

          <div className="order-summary-details">
            <div className="order-summary-item">
              Order Amount
              <span className="order-summary-span-item">{orderAmount}</span>
            </div>

            <div className="order-summary-item">
              Delivery Fee
              <span className="order-summary-span-item">{deliveryFee}</span>
            </div>

            <div className="order-summary-item">
              Discount
              <span className="order-summary-span-item">{discount}</span>
            </div>
            <div className="order-summary-item order-summary-item-total">
              Total
              <span
                className="order-summary-span-item total-confirm"
                style={{ color: "royalblue" }}
              >
                {totalAmount.toFixed(3)}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="heading">Payment Method</h3>
          {paymentMethod === "CARDS" ? (
            <div className="payment-method-detail">
              <FontAwesomeIcon
                icon={faCreditCard}
                className="payment-method-detail-icon"
              />
              <p>Credit/Debit Card</p>
            </div>
          ) : (
            <></>
          )}

          {paymentMethod === "UPI" ? (
            <div className="payment-method-detail">
              <FontAwesomeIcon
                icon={faDollar}
                className="payment-method-detail-icon"
              />
              <p>UPI</p>
            </div>
          ) : (
            <></>
          )}

          {paymentMethod === "E-WALLET" ? (
            <div className="payment-method-detail">
              <FontAwesomeIcon
                icon={faWallet}
                className="payment-method-detail-icon"
              />
              <p>E-Wallet</p>
            </div>
          ) : (
            <></>
          )}

          {paymentMethod === "COD" ? (
            <div className="payment-method-detail">
              <FontAwesomeIcon
                icon={faTruck}
                className="payment-method-detail-icon"
              />
              <p>COD</p>
            </div>
          ) : (
            <></>
          )}

          <div className="order-confirm-footer">
            {randomPage === 2 ? (
              <Link className="order-confirm-footer-btn" to="/payment">
                Retry payment
              </Link>
            ) : (
              <></>
            )}
            <Link
              className="order-confirm-footer-btn"
              to="/"
              style={{ backgroundColor: "gray" }}
            >
              Shop More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
