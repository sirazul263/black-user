"use client";
import { useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { Store } from "../../utils/Store";
import { toast } from "react-toastify";

const ProductSummary = ({ items, total, option }) => {
  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const { cartItems } = cart;

  const deliveryCharge = option === "INSIDE" ? 60 : 130;

  const addToCartHandler = async (item) => {
    const quantity = item.variation.quantity + 1;
    const data = { ...item };
    const variation = { ...data.variation };
    variation.quantity = quantity;
    data.variation = variation;
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...data },
    });
    toast.success("Product  added to the cart", {
      autoClose: 200,
    });
  };

  const subtractToCartHandler = async (item) => {
    const quantity = item.variation.quantity - 1;
    const data = { ...item };
    const variation = { ...data.variation };
    variation.quantity = quantity;
    data.variation = variation;
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...data },
    });
    toast.success("Product  removed from the cart", {
      autoClose: 200,
    });
  };
  const removeItemHandler = (item) => {
    dispatch({ type: "CART_REMOVE_ITEM", payload: item });
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

        {items.map((item, i) => (
          <div className="row fw-bold pt-3 radius-8  px-md-2 " key={i}>
            <div className="col-4 d-flex align-items-center">
              <div>
                <img
                  src={item.image}
                  alt="Item"
                  className="img-fluid cart-image"
                />
              </div>
              <div className="ms-3">
                <p className="mb-1 product-header">{item.name}</p>
                <p className="mb-0 text-muted fs-13">
                  size :{" "}
                  <span className="text-dark">{item.variation.size}</span>
                </p>
              </div>
            </div>
            <div className="col-2 d-flex align-items-center product-header px-md-2 px-0">
              ৳ {item.price}
            </div>
            <div className="col-3 d-flex align-items-center  px-md-2 px-0">
              <div
                className="radius-8  d-flex justify-content-between align-items-center"
                style={{ border: "1px solid #ccc", padding: "3px 5px" }}
              >
                <button
                  className="border-0 bg-transparent"
                  onClick={() => subtractToCartHandler(item)}
                >
                  <AiOutlineMinus size={12} />
                </button>
                <div className="px-md-3 px-1 fs-13 pt-1">
                  {item.variation.quantity}
                </div>
                <button
                  className="border-0 bg-transparent"
                  onClick={() => addToCartHandler(item)}
                >
                  <AiOutlinePlus size={12} />
                </button>
              </div>
            </div>
            <div className="col-3 d-flex align-items-center justify-content-between ">
              <div className="product-header">
                {" "}
                ৳ {item.variation.quantity * item.price}
              </div>
              <div
                className="cursor-pointer"
                onClick={() => removeItemHandler(item)}
              >
                <RiDeleteBinLine />{" "}
              </div>
            </div>
          </div>
        ))}
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
                ৳{" "}
                {cartItems.reduce(
                  (a, c) => a + c.variation.quantity * c.price,
                  0
                )}
              </p>
            </div>
            <div
              className="d-flex justify-content-between mt-2"
              style={{ borderBottom: "1px solid #ccc" }}
            >
              <p className="text-muted ">Delivery Charge</p>
              <p className="fw-bold ">৳ {deliveryCharge}</p>
            </div>
            <div className="d-flex justify-content-between fs-18 mt-3">
              <p className="fw-bold">Total</p>
              <div className="text-end">
                <p className="fw-bold mb-1 text-danger">
                  ৳
                  {cartItems.reduce(
                    (a, c) => a + c.variation.quantity * c.price,
                    0
                  ) + deliveryCharge}
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
export default ProductSummary;
