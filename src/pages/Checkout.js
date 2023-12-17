import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import CheckoutOrderList from "../components/CheckoutOrderList";
import UserDetails from "../components/UserDetails";
import { ORDER_DETAILS } from "../constants";

import "./Checkout.css";
import Promocode from "../components/Promocode";

const CheckoutPage = () => {
  const [orderDetails, setOrderDetails] = useState({});

  async function fetchOrderDetails() {
    await fetch(ORDER_DETAILS)
      .then((data) => data.json())
      .then((value) => {
        setOrderDetails(value);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    // fetchOrderDetails();
    setOrderDetails({
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
    });
  }, []);

  return (
    <>
      <div className="container">
        <div>
          <h3 className="heading">Delivery Detail</h3>
          <UserDetails />
          <CheckoutOrderList productDetails={orderDetails.products} />
          <Promocode />
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
          </div>
        </div>

        <div className="checkout-total">
          <div className="checkout-total-item checkout-total-text">
            <p className="total-heading">Total</p>
          </div>
          <div className="checkout-total-item checkout-total-heading">
            <p className="total">{(5000).toFixed(3)}</p>
          </div>
          <div className="checkout-total-item payment-btn">
          <Link className="payment-btn-inside" to="/payment">Payment </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
