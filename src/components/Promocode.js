import { useState } from "react";
import { Modal, Box, Typography } from "@mui/material";

import useProductDetailsStore from "../store/ProductDetailsStore";

import "./Promocode.css";

const Promocode = () => {
  const setDiscount = useProductDetailsStore((state) => state.setDiscount);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const promoCodeDetails = [
    {
      code: "10-OFF-PROMO-CODE",
      discount: 10,
    },
    {
      code: "20-OFF-PROMO-CODE",
      discount: 20,
    },
  ];

  const [promocodeText, setPromocodeText] = useState("");
  const [promoCodeResponse, setPromoCodeResponse] = useState("");

  function applyPromoCode() {
    promocodeText.toUpperCase();

    let check = promoCodeDetails.find((value) => {
      return value.code === promocodeText.toUpperCase();
    });

    if (check) {
      setDiscount(check.discount);
      setPromoCodeResponse("Promo code applied");
    } else {
      setPromoCodeResponse(
        "Promo code not valid! Please enter valid promocode"
      );
    }

    handleOpen();

    setTimeout(() => {
      setOpen(false);
    }, 2000);
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
          onChange={(event) => {
            setPromocodeText(event.target.value);
          }}
          required
        />
        <p
          className="checkout-promocode-apply-btn"
          onClick={() => {
            applyPromoCode();
          }}
        >
          Apply
        </p>
      </div>

      <div className="warnings-toast-container">
        {promoCodeDetails.map((value, index) => {
          return (
            <span
              className="warning-toast-message"
              key={index}
              style={{ color: "gray" }}
            >
              {value.code}
            </span>
          );
        })}
      </div>

      {/* Promo code result modal*/}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modal-css">
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {promoCodeResponse}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default Promocode;
