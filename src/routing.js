import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import HomePage from "./pages/Home";
import CheckoutPage from "./pages/Checkout";
import ErrorPage from "./pages/Error";
import Navbar from "./components/Navbar";
import PaymentPage from "./pages/Payment";
import OrderConfirmation from "./pages/OrderConfirmation";

const ParentComponent = () => {
  return (
    <>
      <Navbar />
      <div style={{ margin: "60px 0px 0px 0px" }}>
        <Outlet />
      </div>
    </>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <ParentComponent />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/checkout",
        element: <CheckoutPage />,
      },
      {
        path: "/payment",
        element: <PaymentPage />,
      },
      {
        path: "/order-confirmation",
        element: <OrderConfirmation />,
      },
    ],
  },
]);

const Routing = () => {
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Routing;
