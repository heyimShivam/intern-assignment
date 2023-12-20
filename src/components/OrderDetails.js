import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faStar,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import useProductDetailsStore from "../store/ProductDetailsStore";

import "./OrderDetails.css";

const OrderDetails = ({ checkoutPage, details }) => {
  const [fav, setFav] = useState(false);

  const addOrderQuantity = useProductDetailsStore(
    (state) => state.addOrderQuantity
  );
  const removeOrderQuantity = useProductDetailsStore(
    (state) => state.removeOrderQuantity
  );

  return (
    <div className="order-detail-container">
      <div className="item image">
        <img
          src={details.image}
          alt={details.image}
          className="shopping-cart-item-image"
        />
      </div>

      <div className="item title-price">
        <div className="title">{details.title}</div>
        <div className="price">
          Rs. {(details.price).toFixed(3)}
          <span className="quanity-detail">Quantity: {details.quantity}</span>
        </div>
      </div>

      {checkoutPage ? (
        <div className="item update-tools">
          <div
            className="update-tool-btn"
            onClick={() => {
              addOrderQuantity(details.id);
            }}
          >
            <FontAwesomeIcon icon={faPlus} />
          </div>
          <div
            className="update-tool-btn"
            onClick={() => {
              removeOrderQuantity(details.id);
            }}
          >
            {details.quantity !== 1 ? (
              <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faTrashAlt} />
            )}
          </div>
          <div className="update-tool-btn">
            {fav ? (
              <FontAwesomeIcon icon={faStar} onClick={() => setFav(false)} />
            ) : (
              <FontAwesomeIcon
                icon={faStar}
                className="star-icon"
                onClick={() => setFav(true)}
              />
            )}
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default OrderDetails;
