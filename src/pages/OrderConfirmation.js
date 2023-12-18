import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faDollar,
  faTruck,
  faWallet,
} from "@fortawesome/free-solid-svg-icons";

import CheckoutOrderList from "../components/CheckoutOrderList";
import ConfirmationUserDetails from "../components/ConfirmationUserDetails";

import "./OrderConfirmation.css";

const OrderConfirmation = () => {
  let orderDetails = {
    products: [
      {
        id: 17,
        title: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
        price: 39.99,
        image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
        quantity: 4,
      },
      {
        id: 6,
        title: "Solid Gold Petite Micropave",
        price: 168,
        image:
          "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
        quantity: 10,
      },
      {
        id: 10,
        title: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
        price: 109,
        image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
        quantity: 1,
      },
    ],
    paymentMethods: ["UPI", "CARDS"],
  };

  const [orderConfirmationMessage, setOrderConfirmationMessage] = useState("");

  useEffect(() => {
    setOrderConfirmationMessage("Order has been placed successfully.");
  }, []);

  return (
    <>
      <div className="order-confirmation success failed processing">
        <div className="order-confirmation-text">
          {orderConfirmationMessage}
        </div>
      </div>
      <div className="container">
        <div>
          <h3 className="heading">Delivery Detail</h3>
          <ConfirmationUserDetails />
          <CheckoutOrderList
            checkoutPage={false}
            productDetails={orderDetails.products}
          />
        </div>

        <div>
          <h3 className="heading">Order Summary</h3>

          <div className="order-summary-details">
            <div className="order-summary-item">
              Order Amount <span className="order-summary-span-item">300</span>
            </div>

            <div className="order-summary-item">
              Delivery Fee <span className="order-summary-span-item">100</span>
            </div>

            <div className="order-summary-item">
              Discount <span className="order-summary-span-item">10</span>
            </div>
            <div className="order-summary-item order-summary-item-total">
              Total{" "}
              <span
                className="order-summary-span-item total-confirm"
                style={{ color: "royalblue" }}
              >
                {(5000).toFixed(3)}
              </span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="heading">Payment Method</h3>
          <div className="payment-method-detail">
            <FontAwesomeIcon
              icon={faCreditCard}
              className="payment-method-detail-icon"
            />
            <p>Credit/Debit Card</p>
          </div>
          <div className="retry-payment">
            <Link className="retry-payment-btn" to="/payment">
              Retry payment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderConfirmation;
