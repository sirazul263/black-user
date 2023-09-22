"use client";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";

const ProductSummaryNow = ({ items, setItems, total }) => {
  const addToCartHandler = async () => {
    const data = { ...items };
    const variation = { ...items.variation };
    variation.quantity = variation.quantity + 1;
    data.variation = variation;
    setItems(data);
  };

  const subtractToCartHandler = async () => {
    const data = { ...items };
    const variation = { ...items.variation };
    if (variation.quantity > 1) {
      variation.quantity = variation.quantity - 1;
      data.variation = variation;
      setItems(data);
    }
  };

  const removeItemHandler = () => {
    if (sessionStorage.getItem("data") !== undefined) {
      sessionStorage.removeItem("data");
    }
  };
  return (
    <div className=" mb-4">
      <div className="is-shadow p-md-4 p-3 radius-16">
        <h5 className="fw-bold">
          Cart <span className="text-muted">({total} Item)</span>
        </h5>
        <div
          className="row fw-bold py-3 radius-8 mt-4 px-md-2 product-header text-muted"
          style={{ backgroundColor: "#F4F6F8" }}
        >
          <div className="col-4">Product</div>
          <div className="col-2">Price</div>
          <div className="col-3">Quantity</div>
          <div className="col-3">Total Price</div>
        </div>

        <div className="row fw-bold pt-3 radius-8  px-md-2 ">
          <div className="col-4 d-flex align-items-center">
            <div>
              <img
                src={items.image}
                alt="Item"
                className="img-fluid cart-image"
              />
            </div>
            <div className="ms-3">
              <p className="mb-1 product-header">{items.name}</p>
              <p className="mb-0 text-muted fs-13">
                size : <span className="text-dark">{items.variation.size}</span>
              </p>
            </div>
          </div>
          <div className="col-2 d-flex align-items-center product-header px-md-2 px-0">
            ৳ {items.price}
          </div>
          <div className="col-3 d-flex align-items-center  px-md-2 px-0">
            <div
              className="radius-8  d-flex justify-content-between align-items-center"
              style={{ border: "1px solid #ccc", padding: "3px 5px" }}
            >
              <button
                className="border-0 bg-transparent"
                onClick={subtractToCartHandler}
              >
                <AiOutlineMinus size={12} />
              </button>
              <div className="px-md-3 px-1 fs-13 pt-1">
                {items.variation.quantity}
              </div>
              <button
                className="border-0 bg-transparent"
                onClick={addToCartHandler}
              >
                <AiOutlinePlus size={12} />
              </button>
            </div>
          </div>
          <div className="col-3 d-flex align-items-center justify-content-between ">
            <div className="product-header">
              {" "}
              ৳ {items.variation.quantity * items.price}
            </div>
            <div className="cursor-pointer" onClick={removeItemHandler}>
              <RiDeleteBinLine />{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-4"></div>
        <div className="col-md-8">
          <div className="is-shadow py-3 px-4 radius-16">
            <p className="fw-bold fs-18">Order Summary</p>
            <div
              className="d-flex justify-content-between"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <p className="text-muted ">Sub Total</p>
              <p className="fw-bold ">
                ৳ {items.variation.quantity * items.price}
              </p>
            </div>
            <div className="d-flex justify-content-between fs-18 mt-3">
              <p className="fw-bold">Total</p>
              <div className="text-end">
                <p className="fw-bold mb-1 text-danger">
                  ৳{items.variation.quantity * items.price}
                </p>
                <p className="fs-13 fw-semibold">
                  (VAT included if applicable)
                </p>
              </div>
            </div>

            <div
              className="search-bar radius-8 my-4"
              style={{ border: "1px solid #ccc", padding: "7px" }}
            >
              <div className="search-box position-relative">
                <input
                  type="text"
                  name="search"
                  className="form-control border-0   "
                  placeholder="Discount codes / Gifts"
                  // onChange={(e) => setPropertyName(e.target.value)}
                  // value={propertyName}
                />
                <button
                  className="btn position-absolute end-0 top-0 fs-14 fw-bold "
                  type="button"
                >
                  Apply
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductSummaryNow;
