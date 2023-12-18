import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmarkCircle } from "@fortawesome/free-solid-svg-icons";

import CheckoutOrderList from "../components/CheckoutOrderList";
import UserDetails from "../components/UserDetails";
import { ORDER_DETAILS } from "../constants";
import Promocode from "../components/Promocode";
import useProductDetailsStore from "../store/ProductDetailsStore";

import "./Checkout.css";

const CheckoutPage = () => {
  const [showValidationDetails, setShowValidationDetails] = useState(false);
  const contactNumber = useProductDetailsStore((state) => state.contactNumber);
  const location = useProductDetailsStore((state) => state.location);
  const addOrderDetails = useProductDetailsStore(
    (state) => state.addOrderDetails
  );

  const orderAmount = useProductDetailsStore((state) => state.orderAmount);
  const totalAmount = useProductDetailsStore((state) => state.totalAmount);
  const deliveryFee = useProductDetailsStore((state) => state.deliveryFee);
  const discount = useProductDetailsStore((state) => state.discount);

  function updateAndCheckValidation() {
    if (!(contactNumber.length === 10 && location.length > 0)) {
      setShowValidationDetails(true);
      return;
    }

    setShowValidationDetails(false);
  }

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
    document.getElementById("navbar-title").innerText = "Checkout";
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h3 className="heading">Delivery Detail</h3>
          <UserDetails showValidationDetails={showValidationDetails} />
          <CheckoutOrderList checkoutPage={true} />
          <Promocode />
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
          </div>
        </div>

        <div className="checkout-total">
          <div className="checkout-total-item checkout-total-text">
            <p className="total-heading">Total</p>
          </div>
          <div className="checkout-total-item checkout-total-heading">
            <p className="total">{totalAmount.toFixed(3)}</p>
          </div>
          <div className="checkout-total-item payment-btn">
            <Link
              onClick={() => updateAndCheckValidation()}
              className={
                !(contactNumber.length === 10 && location.length > 0)
                  ? "payment-btn-inside disabled-btn"
                  : "payment-btn-inside"
              }
              to={
                contactNumber.length === 10 && location.length > 0
                  ? "/payment"
                  : "#"
              }
            >
              Payment
            </Link>
            {showValidationDetails ? (
              <div className="warning-toast-message">
                Enter delivery details.
                <span className="warning-toast-message-xmark">
                  <FontAwesomeIcon
                    icon={faXmarkCircle}
                    onClick={() => {
                      setShowValidationDetails(!showValidationDetails);
                    }}
                  ></FontAwesomeIcon>
                </span>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
