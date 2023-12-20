import OrderDetails from "./OrderDetails";
import useProductDetailsStore from "../store/ProductDetailsStore";

import "./CheckoutOrderList.css";

const CheckoutOrderList = (props) => {
  const orderDetailsProducts = useProductDetailsStore(
    (state) => state.orderDetailsProducts
  );

  return (
    <div className="order-list-container">
      <p className="subheading-checkout">Order List</p>
      {orderDetailsProducts ? (
        <div className="order-list-content">
          {orderDetailsProducts.map((value) => (
            <div className="order-item" key={value.id}>
              <OrderDetails checkoutPage={props.checkoutPage} details={value} />
            </div>
          ))}
        </div>
      ) : (
        <>{/* Shimmer */}</>
      )}
    </div>
  );
};

export default CheckoutOrderList;
