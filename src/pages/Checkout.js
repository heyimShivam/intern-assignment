import { useEffect, useState } from "react";

import CheckoutOrderList from "../components/CheckoutOrderList";
import UserDetails from "../components/UserDetails";
import { ORDER_DETAILS } from "../constants";

import "./Checkout.css";

async function fetchOrderDetails() {
  await fetch(ORDER_DETAILS)
    .then((data) => data.json())
    .then((value) => {
      console.log(value);
      console.log(value.products[0]);
    })
    .catch((error) => {
      console.error(error);
    });
}

const CheckoutPage = () => {
  const [orderDetails, setOrderDetails] = useState({});

  useEffect(() => {
    setOrderDetails(fetchOrderDetails());
  }, []);

  return (
    <>
      <div className="container">
        <h3 className="heading delivery-detail-title">Delivery Detail</h3>
        <UserDetails />
        <CheckoutOrderList />
      </div>
    </>
  );
};

export default CheckoutPage;
