import "./ProductListShimmer.css";

const ProductShimmer = () => {
  return (
    <>
      <div className="order-detail-container">
        <div className="shimmer-image animate"></div>

        <div className="title-price">
          <div className="shimmer-title animate"></div>
          <div className="shimmer-price animate"></div>
        </div>

        <div className="item shimmer-update-tools animate"></div>
      </div>
    </>
  );
};

const ProductListShimmer = () => {
  return (
    <>
      <ProductShimmer />
      <ProductShimmer />
      <ProductShimmer />
    </>
  );
};

export default ProductListShimmer;
