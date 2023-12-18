import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CheckoutOrderList from "../components/CheckoutOrderList";
import UserDetails from "../components/UserDetails";
import { ORDER_DETAILS } from "../constants";
import Promocode from "../components/Promocode";
import useProductDetailsStore from "../store/ProductDetailsStore";

import "./Checkout.css";

const CheckoutPage = () => {
  const addOrderDetails = useProductDetailsStore(
    (state) => state.addOrderDetails
  );
  const orderAmountDetails = useProductDetailsStore(
    (state) => state.orderAmountDetails
  );

  async function fetchOrderDetails() {
    await fetch(ORDER_DETAILS)
      .then((data) => data.json())
      .then((value) => {
        addOrderDetails(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    fetchOrderDetails();
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h3 className="heading">Delivery Detail</h3>
          <UserDetails />
          <CheckoutOrderList checkoutPage={true} />
          <Promocode />
        </div>

        <div>
          <h3 className="heading">Order Summary</h3>

          <div className="order-summary-details">
            <div className="order-summary-item">
              Order Amount{" "}
              <span className="order-summary-span-item">
                {orderAmountDetails.orderAmount}
              </span>
            </div>

            <div className="order-summary-item">
              Delivery Fee{" "}
              <span className="order-summary-span-item">
                {orderAmountDetails.deliveryFee}
              </span>
            </div>

            <div className="order-summary-item">
              Discount{" "}
              <span className="order-summary-span-item">
                {orderAmountDetails.discount}
              </span>
            </div>
          </div>
        </div>

        <div className="checkout-total">
          <div className="checkout-total-item checkout-total-text">
            <p className="total-heading">Total</p>
          </div>
          <div className="checkout-total-item checkout-total-heading">
            <p className="total">
              {(
                Number(orderAmountDetails.orderAmount) +
                Number(orderAmountDetails.deliveryFee) +
                Number(orderAmountDetails.discount)
              ).toFixed(3)}
            </p>
          </div>
          <div className="checkout-total-item payment-btn">
            <Link className="payment-btn-inside" to="/payment">
              Payment
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
