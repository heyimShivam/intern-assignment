import { useState } from "react";

import useProductDetailsStore from "../store/ProductDetailsStore";

import "./Promocode.css";

const Promocode = () => {
  const setDiscount = useProductDetailsStore((state) => state.setDiscount);
  const discount = useProductDetailsStore((state) => state.discount);
  const setTotalAmount = useProductDetailsStore((state) => state.setTotalAmount);
  const totalAmount = useProductDetailsStore((state) => state.totalAmount);
  const setOrderAmount = useProductDetailsStore((state) => state.setOrderAmount);
  const orderAmount = useProductDetailsStore((state) => state.orderAmount);

  const promoCodeDetails = [
    {
      code: "10-OFF-PROMO-CODE",
      discount: 10,
    },
    {
      code: "20-OFF-PROMO-CODE",
      discount: 20,
    }
  ];

  const [promocodeText, setPromocodeText] = useState("");

  function applyPromoCode() {
    promocodeText.toUpperCase();

    let check = promoCodeDetails.find((value) => {
      return value.code === (promocodeText.toUpperCase());
    });

    if(check) {
      setDiscount(check.discount);
    }
  }

  return (
    <div className="promocode">
      <p className="subheading-checkout">Promo Code</p>
      <div className="promocode-container">
        <input
          name="Location"
          width="fit-content"
          placeholder="Enter Promo Code here..."
          className="checkout-promocode-text"
          value={promocodeText}
          onChange={(event) => {setPromocodeText(event.target.value)}}
          required
        />
        <p className="checkout-promocode-apply-btn" onClick={() => {applyPromoCode()}}>Apply</p>
      </div>

      <div className="warnings-toast-container">
        {promoCodeDetails.map((value, index) => {
          return <span className="warning-toast-message" key={index} style={{color: "gray"}}>{value.code}</span>;
        })}
      </div>
    </div>
  );
};

export default Promocode;
