import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faMinus,
  faStar,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./OrderDetails.css";

const OrderDetails = ({ details }) => {
  const [fav, setFav] = useState(false);
  const [count, setCount] = useState(details.quantity);

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
        <div className="title">{ details.title }</div>
        <div className="price">
          Rs. {(details.price * count).toFixed(3)}
          <span className="quanity-detail">Quantity: {count}</span>{" "}
        </div>
      </div>

      <div className="item update-tools">
        <div className="update-tool-btn">
          <FontAwesomeIcon icon={faPlus} onClick={() => setCount(count + 1)} />
        </div>
        <div className="update-tool-btn">
          {count !== 1  ? (
            <FontAwesomeIcon
              icon={faMinus}
              onClick={() => setCount(count - 1)}
            />
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
    </div>
  );
};

export default OrderDetails;
