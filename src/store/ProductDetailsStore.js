import { create } from "zustand";

const ProductDetailsStore = (set) => ({
  location: "",
  contactNumber: "",
  detailsProducts: {},
  orderDetailsProducts: [],
  orderAmount: 0,
  totalAmount: 0,
  deliveryFee: 100,
  discount: 0,
  adminFee: 0,
  paymentMethod: "CARDS",
  setOrderAmount: (value) => {
    set((state) => ({
      orderAmount: value,
    }));
  },
  setTotalAmount: (value) => {
    set((state) => ({
      totalAmount: value,
    }));
  },
  setDeliveryFee: (value) => {
    set((state) => ({
      deliveryFee: value,
    }));
  },
  setDiscount: (value) => {
    set((state) => ({
      totalAmount: (state.totalAmount + state.discount) - value,
      orderAmount: (state.orderAmount + state.discount) - value,
      discount: value,
    }));
  },
  setAdminFee: (value) => {
    set((state) => ({
      adminFee: value,
    }));
  },
  updatePaymentMethod: (value) => {
    set((state) => ({
      paymentMethod: value,
    }));
  },
  updateLocation: (details) => {
    set((state) => ({
      location: details,
    }));
  },
  updateContactNumber: (details) => {
    set((state) => ({
      contactNumber: details,
    }));
  },
  addOrderDetails: (details) => {
    let calculateAmountDetails = {
      orderAmount: 0,
      totalAmount: 0,
      deliveryFee: 100,
      discount: 0,
      adminFee: 0,
    };

    let orderAmount = 0;

    for (let product of details?.products) {
      orderAmount = product?.quantity * product?.price + orderAmount;
    }

    calculateAmountDetails.orderAmount = orderAmount;

    calculateAmountDetails.totalAmount =
      calculateAmountDetails.orderAmount +
      calculateAmountDetails.deliveryFee;

    set((state) => ({
      detailsProducts: details,
      orderDetailsProducts: details?.products,
      orderAmount: calculateAmountDetails.orderAmount,
      totalAmount: calculateAmountDetails.totalAmount,
      deliveryFee: calculateAmountDetails.deliveryFee,
      discount: calculateAmountDetails.discount,
      adminFee: calculateAmountDetails.adminFee,
    }));
  },
  addOrderQuantity: (id) => {
    set((state) => ({
      orderDetailsProducts: state.orderDetailsProducts.filter(
        (product, index) => {
          if (product.id === id) {
            state.orderDetailsProducts[index].quantity++;
            state.orderAmount += state.orderDetailsProducts[index].price;
            state.totalAmount += state.orderDetailsProducts[index].price;
          }
          return true;
        }
      ),
    }));
  },
  removeOrderQuantity: (id) => {
    set((state) => ({
      orderDetailsProducts: state.orderDetailsProducts.filter(
        (product, index) => {
          if (product.id === id) {
            state.orderDetailsProducts[index].quantity--;
            state.orderAmount -= state.orderDetailsProducts[index].price;
            state.totalAmount -= state.orderDetailsProducts[index].price;

            if (state.orderDetailsProducts[index].quantity === 0) {
              return false;
            }
          }

          return true;
        }
      ),
    }));
  },
});

const useProductDetailsStore = create(ProductDetailsStore);

export default useProductDetailsStore;
