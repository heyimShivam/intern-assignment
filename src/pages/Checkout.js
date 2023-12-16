import { useEffect, useState } from "react";

import CheckoutOrderList from "../components/CheckoutOrderList";
import UserDetails from "../components/UserDetails";
import { ORDER_DETAILS } from "../constants";

import "./Checkout.css";

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
      "products": [
          {
              "id": 17,
              "title": "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
              "price": 39.99,
              "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
              "quantity": 4
          },
          {
              "id": 6,
              "title": "Solid Gold Petite Micropave",
              "price": 168,
              "image": "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
              "quantity": 10
          },
          {
              "id": 10,
              "title": "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
              "price": 109,
              "image": "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
              "quantity": 1
          }
      ],
      "paymentMethods": [
          "UPI",
          "CARDS"
      ]
  });
  }, []);

  return (
    <>
      <div className="container">
        <h3 className="heading delivery-detail-title">Delivery Detail</h3>
        <UserDetails />
        <CheckoutOrderList productDetails={orderDetails.products} />
      </div>
    </>
  );
};

export default CheckoutPage;
