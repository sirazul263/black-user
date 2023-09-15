"use client";

import { useState, useEffect, useContext } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";
import SizeModal from "./SizeModal";
import { useRouter } from "next/navigation";
import { getSingleProduct } from "../../../services/productServices";
import Loader from "../../../components/Loader";
import { useSearchParams } from "next/navigation";
import { Store } from "../../../utils/Store";
import { toast } from "react-toastify";

const ProductDetailsMain = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const Id = searchParams.get("Id");
  //Fetching Data
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState(null);
  useEffect(() => {
    const fetchProduct = async () => {
      const product = await getSingleProduct(Id, setLoading);
      setSelected(product.image_urls[0]);
      setResult(product);
    };
    fetchProduct();
  }, []);

  const [size, setSize] = useState("");
  const [item, setItem] = useState(1);

  const [showSize, setShowSize] = useState(false);

  const { state, dispatch } = useContext(Store);

  const addToCartHandler = async () => {
    if (!size) {
      toast.warning("Please select a size", {
        autoClose: 200,
      });
      return;
    }
    const variationId = result.variations.find(
      (variation) => variation.size === size
    );
    const data = {
      id: result.id,
      name: result.name,
      price: result.sell_price,
      image: result.image_urls[0],
      variation: {
        id: variationId.id,
        quantity: item,
        color: variationId.color,
      },
    };

    const existingItem = state.cart.cartItems.find(
      (item) => item.id === Id && item.variation.id === variationId.id
    );
    const quantity = existingItem ? existingItem.variation.quantity + 1 : 1;

    if (variationId.quantity < quantity) {
      toast.warning("Sorry. Product is out of stock", {
        autoClose: 200,
      });
      return;
    }
    dispatch({
      type: "CART_ADD_ITEM",
      payload: { ...data, quantity: quantity },
    });
  };

  return (
    <section>
      {loading ? (
        <Loader />
      ) : (
        <>
          {result && (
            <>
              <div className="row">
                <div className="col-md-6">
                  <div className="d-flex justify-content-center">
                    <div className="d-flex">
                      <div>
                        <img
                          alt="Category"
                          src={selected}
                          className="img-fluid main-image"
                        />
                      </div>
                      <div className="d-none d-md-block   ms-4">
                        {result.image_urls.map((image, i) => (
                          <div className="mb-4" key={i}>
                            <img
                              alt="Category"
                              src={image}
                              className="img-fluid cursor-pointer product-grid"
                              onClick={() => setSelected(image)}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="d-flex my-3  d-md-none">
                    {result.image_urls.map((image, i) => (
                      <div className="mb-4 me-3" key={i}>
                        <img
                          alt="Category"
                          src={image}
                          className="img-fluid cursor-pointer product-grid2 "
                          onClick={() => setSelected(image)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="ms-md-5">
                    <h1 className="fw-bold mb-3">
                      {result.name.toUpperCase()}
                    </h1>
                    <h3 className="fw-semibold mb-3"> ৳ {result.sell_price}</h3>
                    <p className="fw-semibold mb-3">{result.description}</p>
                    <div className="d-flex justify-content-between align-items-center mt-md-5">
                      <h5 className="fw-bold">SELECT SIZE</h5>
                      <h5
                        className="fw-bold cursor-pointer primary-color text-decoration-underline"
                        onClick={() => setShowSize(true)}
                      >
                        Size guide
                      </h5>
                    </div>

                    <div className="form-group select-title mt-4">
                      <div className="d-flex mb-1 is-radius-16">
                        {result.variations.map((s, i) => (
                          <div className="" key={i}>
                            <label
                              className="position-relative select-label me-3 is-radius-16 cursor-pointer"
                              htmlFor={s.id}
                            >
                              <input
                                type="radio"
                                name="options"
                                id={s.id}
                                value={s.size}
                                checked={s.size === size ? true : false}
                                className="form-control"
                                style={{
                                  display: "none",
                                }}
                                onChange={(e) => setSize(s.size)}
                              />
                              <h3 className="person-selection  mb-0 is-radius-8 fs-12 fw-bold text-clr-dark">
                                <span className="bg-color is-radius-16 "></span>{" "}
                                {s.size.toUpperCase()}
                              </h3>
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-md-5 mt-3">
                      <div className="radius-32 add-btn d-flex justify-content-between align-items-center px-md-5 px-4 fw-bold">
                        <button
                          className="border-0 bg-transparent"
                          onClick={() => setItem(item - 1)}
                          disabled={item === 1}
                        >
                          <AiOutlineMinus />
                        </button>
                        <div>{item}</div>
                        <button
                          className="border-0 bg-transparent"
                          onClick={() => setItem(item + 1)}
                        >
                          <AiOutlinePlus />
                        </button>
                      </div>
                    </div>
                    <div className="mt-4">
                      <button
                        type="button"
                        className="w-100 radius-32 bg-clr-primary border-0 text-white fw-bold py-3 mb-3"
                        onClick={addToCartHandler}
                      >
                        ADD TO CART
                      </button>

                      <button
                        type="button"
                        className="w-100 radius-32 bg-dark border-0 text-white fw-bold py-3"
                        onClick={() => router.push("/checkout")}
                      >
                        BUY NOW
                      </button>
                    </div>
                    <div className="d-flex justify-content-center mt-5 fw-bold">
                      <BiLogoFacebook size={24} className="cursor-pointer" />
                      <BiLogoInstagramAlt
                        size={24}
                        className="mx-4 cursor-pointer"
                      />
                      <BiLogoLinkedin size={24} className="cursor-pointer" />
                      <BiLogoTwitter
                        size={24}
                        className="mx-4 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <div className="d-flex justify-content-center">
                      <div>
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.08"
                            width="64"
                            height="64"
                            rx="32"
                            fill="#B09F05"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M44.84 27.815L48.5 32L44.84 36.185L45.35 41.72L39.935 42.95L37.1 47.735L32 45.545L26.9 47.75L24.065 42.965L18.65 41.735L19.16 36.185L15.5 32L19.16 27.8L18.65 22.25L24.065 21.035L26.9 16.25L32 18.44L37.1 16.25L39.935 21.05L45.35 22.28L44.84 27.815ZM23.435 33.365L29.135 39.08L40.13 28.055L37.91 25.835L29.135 34.64L25.655 31.145L23.435 33.365Z"
                            fill="#B09F05"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center mt-4 px-md-5">
                      <p className="fw-bold ">100% Original</p>
                      <p className="text-muted">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic,
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="d-flex justify-content-center">
                      <div>
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.08"
                            width="64"
                            height="64"
                            rx="32"
                            fill="#B09F05"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M17 32C17 23.7157 23.7157 17 32 17C35.9782 17 39.7936 18.5804 42.6066 21.3934C45.4196 24.2064 47 28.0218 47 32C47 40.2843 40.2843 47 32 47C23.7157 47 17 40.2843 17 32ZM32 33.5H38C38.8284 33.5 39.5 32.8284 39.5 32C39.5 31.1716 38.8284 30.5 38 30.5H33.5V26C33.5 25.1716 32.8284 24.5 32 24.5C31.1716 24.5 30.5 25.1716 30.5 26V32C30.5 32.8284 31.1716 33.5 32 33.5Z"
                            fill="#B09F05"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center mt-4 px-md-5">
                      <p className="fw-bold ">10 Day Replacement</p>
                      <p className="text-muted">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic,
                      </p>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="d-flex justify-content-center">
                      <div>
                        <svg
                          width="64"
                          height="64"
                          viewBox="0 0 64 64"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            opacity="0.08"
                            width="64"
                            height="64"
                            rx="32"
                            fill="#B09F05"
                          />
                          <path
                            d="M32.0001 46.775C31.4759 46.7833 30.9588 46.654 30.5001 46.4L30.0501 46.145C22.9142 42.1078 18.5019 34.5439 18.5001 26.345V26.135C18.4904 25.0536 19.0635 24.0507 20.0001 23.51L30.5001 17.6C31.4283 17.0641 32.5719 17.0641 33.5001 17.6L44.0001 23.51C44.9367 24.0507 45.5098 25.0536 45.5001 26.135V26.345C45.4922 34.5501 41.0676 42.1155 33.9201 46.145L33.4701 46.4C33.0203 46.6489 32.5142 46.778 32.0001 46.775Z"
                            fill="#B09F05"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="text-center mt-4 px-md-5">
                      <p className="fw-bold ">1 Year Warranty</p>
                      <p className="text-muted">
                        Lorem ipsum is placeholder text commonly used in the
                        graphic,
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="mt-5">
        <h5 className="fw-bold mb-5">Related Products</h5>
        <div className="row">
          {result.map((product, index) => (
            <Products res={product} key={index} />
          ))}
        </div>
      </div> */}
              {showSize && <SizeModal show={showSize} setShow={setShowSize} />}
            </>
          )}
        </>
      )}
    </section>
  );
};

export default ProductDetailsMain;
