import { create } from "zustand";

const ProductDetailsStore = (set) => ({
  location: "",
  contactNumber: "",
  detailsProducts: {},
  orderDetailsProducts: [],
  orderAmountDetails: {
    adminFee: 0,
    orderAmount: 0,
    totalAmount: 0,
    deliveryFee: 100,
    discount: 10,
  },
  paymentMethod: "",
  updatePaymentMethod: (value) => {
    set((state) => ({
        paymentMethod: value
    }))
  },
  updateLocation: (details) => {
    set((state) => ({
        location: details,
    }));
  },
  updateContactNumber: (details) => {
    set((state) => ({
        contactNumber: details
    }));
  },
  updateOrderAmountDetails: (details) => {
    set((state) => ({
      orderAmountDetails: details,
    }));
  },
  addOrderDetails: (details) => {
    let calculateAmountDetails = {
      adminFee: 0,
      orderAmount: 0,
      totalAmount: 0,
      deliveryFee: 100,
      discount: 10,
    };
    let totalAmount = 0;
    for (let product of details?.products) {
      totalAmount = product?.quantity * product?.price + totalAmount;
    }
    calculateAmountDetails.orderAmount = totalAmount;
    calculateAmountDetails.totalAmount =
      calculateAmountDetails.orderAmount +
      calculateAmountDetails.deliveryFee +
      calculateAmountDetails.discount;

    set((state) => ({
      detailsProducts: details,
      orderDetailsProducts: details?.products,
      orderAmountDetails: calculateAmountDetails,
    }));
  },
  addOrderQuantity: (id) => {
    set((state) => ({
      orderDetailsProducts: state.orderDetailsProducts.filter(
        (product, index) => {
          if (product.id === id) {
            state.orderDetailsProducts[index].quantity++;
            state.orderAmountDetails.orderAmount +=
              state.orderDetailsProducts[index].price;
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
            state.orderAmountDetails.orderAmount -=
              state.orderDetailsProducts[index].price;

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
