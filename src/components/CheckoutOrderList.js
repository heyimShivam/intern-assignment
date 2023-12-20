import OrderDetails from "./OrderDetails";
import useProductDetailsStore from "../store/ProductDetailsStore";
import ProductListShimmer from "./ProductListShimmer";

import "./CheckoutOrderList.css";

const CheckoutOrderList = (props) => {
  const orderDetailsProducts = useProductDetailsStore(
    (state) => state.orderDetailsProducts
  );

  return (
    <div className="order-list-container">
      <p className="subheading-checkout">Order List</p>
      {orderDetailsProducts.length > 0 ? (
        <div className="order-list-content">
          {orderDetailsProducts.map((value) => (
            <div className="order-item" key={value.id}>
              <OrderDetails checkoutPage={props.checkoutPage} details={value} />
            </div>
          ))}
        </div>
      ) : (
        <ProductListShimmer/>
      )}
    </div>
  );
};

export default CheckoutOrderList;
