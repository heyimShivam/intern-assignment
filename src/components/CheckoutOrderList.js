import OrderDetails from "./OrderDetails";

import "./CheckoutOrderList.css";

const CheckoutOrderList = (props) => {
  return (
    <div className="order-list-container">
      <p className="subheading-checkout">Order List</p>
      {props.productDetails ? (
        <div className="order-list-content">
          {props.productDetails.map((value, index) => (
            <>
              <div className="order-item" key={index}>
                <OrderDetails details={value} />
              </div>
            </>
          ))}
        </div>
      ) : (
        <>{/* Shimmer */}</>
      )}
    </div>
  );
};

export default CheckoutOrderList;
