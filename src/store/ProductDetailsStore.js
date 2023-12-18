import { create } from "zustand";

// state.OrderDetails old details;


const ProductDetailsStore = (set) => ({
    detailsProducts: {},
    orderDetailsProducts: [],
    orderAmountDetails: {
        orderAmount: 0,
        totalAmount: 0,
        deliveryFee: 100,
        discount: 10
    },
    setOrderAmountDetails: (details) => {
        set((state) => ({
            orderAmountDetails: details
        }));
    },
    addOrderDetails: (details) => {
        set((state) => ({
            OrderDetails: details,
            orderDetailsProducts: details?.products
        }));
    },
    addOrderQuantity: (id) => {
        set((state) => ({
            orderDetailsProducts: state.orderDetailsProducts.filter((product,index) => {
                if(product.id === id) {
                    state.orderDetailsProducts[index].quantity++;
                }
                return true;
            })
        }))
    },
    removeOrderQuantity: (id) => {
        set((state) => ({
            orderDetailsProducts: state.orderDetailsProducts.filter((product, index) => {
                if(product.id === id) {
                    state.orderDetailsProducts[index].quantity--;
                }
                if(state.orderDetailsProducts[index].quantity <= 0) return false;
                return true;
            })
        }))
    }
});

const useProductDetailsStore = create(ProductDetailsStore);

export default useProductDetailsStore;