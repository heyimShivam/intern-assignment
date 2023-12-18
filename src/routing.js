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
      <Outlet />
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
        element: <PaymentPage />
      },
      {
        path: "/order-confirmation",
        element: <OrderConfirmation />
      }
    ],
  },
  {
    path: "/login",
    element: <HomePage />,
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
