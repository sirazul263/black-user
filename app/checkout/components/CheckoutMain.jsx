"use client";

import { Button, Spinner, Form as Form2 } from "react-bootstrap";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import TextField from "../../UI/TextField";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { useContext, useEffect, useState } from "react";
import { Store } from "../../utils/Store";
import Cookies from "js-cookie";
import { addOrder, addOrderNow } from "../../services/orderServices";

import { useRouter, useSearchParams } from "next/navigation";
import ProductSummary from "./ProductSummary";
import ProductSummaryNow from "./ProductSummaryNow";

const CheckoutMain = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const { state, dispatch } = useContext(Store);
  const { cart } = state;

  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(
      cart.cartItems.reduce((a, c) => a + c.variation.quantity, 0)
    );
  }, [cart]);

  //Buy Now

  const data =
    type &&
    type === "buyNow" &&
    typeof window !== "undefined" &&
    sessionStorage.getItem("data")
      ? JSON.parse(sessionStorage.getItem("data"))
      : null;
  const [items, setItems] = useState(data);

  const router = useRouter();
  const validate = Yup.object({
    full_name: Yup.string()
      .max(45)
      .required("Full Name is required")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field"),
    phone: Yup.number().required("Phone is required"),
    address: Yup.string().max(255).required("Address is required"),
  });

  const [option, setOption] = useState("INSIDE");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Hydration

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="my-md-5 my-3">
      <h2 className="fw-bold">Checkout</h2>

      {type && type === "buyNow" ? (
        <div>
          {!items ? (
            <div>
              <p className="text-center mt-5">No Items in the Cart.</p>
            </div>
          ) : (
            <div className="row ">
              <div className="d-md-none">
                <ProductSummaryNow
                  items={items}
                  setItems={setItems}
                  option={option}
                />
              </div>

              <div className="col-md-6 mb-4">
                <div className="form-body py-3 px-md-4 primary-input">
                  <Formik
                    initialValues={{
                      full_name: "",
                      phone: "",
                      address: "",
                      amount: "",
                    }}
                    validationSchema={validate}
                    onSubmit={async (values) => {
                      const guest = Cookies.get("user_id");
                      const data = {
                        full_name: values.full_name,
                        phone: values.phone,
                        address: values.address,
                        shipping_method_id: option == "INSIDE" ? "1" : "2",
                        product_variation_id: items.variation.id,
                        quantity: items.variation.quantity,
                      };
                      const res = await addOrderNow(data, guest, setLoading);
                      if (!res.hasOwnProperty("message")) {
                        if (sessionStorage.getItem("data") !== undefined) {
                          sessionStorage.removeItem("data");
                        }
                        const id = type === "buyNow" ? res.cart.id : res.id;
                        router.push(`/booking-success?bookingId=${id}`);
                      } else {
                        setError(res.message);
                      }
                    }}
                  >
                    {(formik) => (
                      <Form>
                        <div className="row flight choose-option  mb-2">
                          <Form2 className="bg-transparent border-0">
                            <div className="flight-selection mb-3 mt-2">
                              <div className="d-flex align-items=center">
                                <div className="mx-2">
                                  <Form2.Check
                                    inline
                                    label="Inside Dhaka"
                                    name="group2"
                                    type="radio"
                                    id="inline-2"
                                    onChange={() => setOption("INSIDE")}
                                    checked={option === "INSIDE"}
                                  />
                                </div>
                                <div className="mx-4">
                                  <Form2.Check
                                    inline
                                    label="Outside Dhaka"
                                    name="group2"
                                    type="radio"
                                    id="inline-3"
                                    onChange={() => setOption("OUTSIDE")}
                                    checked={option === "OUTSIDE"}
                                  />
                                </div>
                              </div>
                            </div>
                          </Form2>
                        </div>
                        <div className="mb-3">
                          <TextField
                            type="text"
                            className="form-control is-radius-5 fs-14"
                            id="full_name"
                            placeholder="Full Name"
                            name="full_name"
                          />
                        </div>
                        <div className="mb-3">
                          <TextField
                            type="text"
                            className="form-control is-radius-5 fs-14"
                            id="phone"
                            placeholder="Phone"
                            name="phone"
                          />
                        </div>
                        <div className="mb-3">
                          <TextField
                            type="text"
                            className="form-control is-radius-5 fs-14"
                            id="address"
                            placeholder="Address"
                            name="address"
                          />
                        </div>
                        {error && (
                          <p className="text-danger fs-14 fw-500">
                            <AiOutlineExclamationCircle /> {error}
                          </p>
                        )}
                        {loading ? (
                          <Button
                            disabled
                            className="loading-button d-flex align-items-center justify-content-center w-100  mb-2 "
                          >
                            <Spinner
                              as="span"
                              animation="grow"
                              size="md"
                              role="status"
                              aria-hidden="true"
                            />
                            <span className="ms-3"> Loading...</span>
                          </Button>
                        ) : (
                          <Button
                            className="place-order-btn bg-dark  py-md fs-14 is-radius-5 border-0  w-100  mb-2 mt-3"
                            type="submit"
                          >
                            <span className="pe-1">Place Order</span>
                          </Button>
                        )}
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>

              <div className="col-md-6 d-none d-md-block">
                <ProductSummaryNow
                  items={items}
                  setItems={setItems}
                  option={option}
                />
              </div>
            </div>
          )}
        </div>
      ) : (
        <div>
          {cartItemsCount < 1 ? (
            <div>
              <p className="text-center mt-5">No Items in the Cart.</p>
            </div>
          ) : (
            <div className="row ">
              <div className="d-md-none">
                <ProductSummary
                  items={cart.cartItems}
                  total={cartItemsCount}
                  option={option}
                />
              </div>

              <div className="col-md-6 mb-4">
                <div className="form-body py-3 px-md-4 primary-input">
                  <Formik
                    initialValues={{
                      full_name: "",
                      phone: "",
                      address: "",
                    }}
                    validationSchema={validate}
                    onSubmit={async (values) => {
                      const guest = Cookies.get("user_id");
                      const deliveryCharge = option === "INSIDE" ? 60 : 130;
                      const data = {
                        total_amount:
                          cart.cartItems.reduce(
                            (a, c) => a + c.variation.quantity * c.price,
                            0
                          ) + deliveryCharge,
                        full_name: values.full_name,
                        phone: values.phone,
                        address: values.address,
                        shipping_method_id: option === "INSIDE" ? "1" : "2",
                        offer_id: "",
                      };
                      const res = await addOrder(data, guest, setLoading);
                      if (!res.hasOwnProperty("message")) {
                        Cookies.remove("cart");
                        dispatch({ type: "CART_RESET" });
                        router.push("/booking-success");
                      } else {
                        setError(res.message);
                      }
                    }}
                  >
                    {(formik) => (
                      <Form>
                        <div className="row flight choose-option  mb-2">
                          <Form2 className="bg-transparent border-0">
                            <div className="flight-selection mb-3 mt-2">
                              <div className="d-flex ">
                                <div className="mx-2">
                                  <Form2.Check
                                    inline
                                    label="Inside Dhaka"
                                    name="group2"
                                    type="radio"
                                    id="inline-2"
                                    onChange={() => setOption("INSIDE")}
                                    checked={option === "INSIDE"}
                                  />
                                </div>
                                <div className="mx-4">
                                  <Form2.Check
                                    inline
                                    label="Outside Dhaka"
                                    name="group2"
                                    type="radio"
                                    id="inline-3"
                                    onChange={() => setOption("OUTSIDE")}
                                    checked={option === "OUTSIDE"}
                                  />
                                </div>
                              </div>
                            </div>
                          </Form2>
                        </div>
                        <div className="mb-3">
                          <TextField
                            type="text"
                            className="form-control is-radius-5 fs-14"
                            id="full_name"
                            placeholder="Full Name"
                            name="full_name"
                          />
                        </div>
                        <div className="mb-3">
                          <TextField
                            type="text"
                            className="form-control is-radius-5 fs-14"
                            id="phone"
                            placeholder="Phone"
                            name="phone"
                          />
                        </div>
                        <div className="mb-3">
                          <TextField
                            type="text"
                            className="form-control is-radius-5 fs-14"
                            id="address"
                            placeholder="Address"
                            name="address"
                          />
                        </div>
                        {error && (
                          <p className="text-danger fs-14 fw-500">
                            <AiOutlineExclamationCircle /> {error}
                          </p>
                        )}
                        {loading ? (
                          <Button
                            disabled
                            className="loading-button d-flex align-items-center justify-content-center w-100  mb-2 "
                          >
                            <Spinner
                              as="span"
                              animation="grow"
                              size="md"
                              role="status"
                              aria-hidden="true"
                            />
                            <span className="ms-3"> Loading...</span>
                          </Button>
                        ) : (
                          <Button
                            className="place-order-btn bg-dark  py-md fs-14 is-radius-5 border-0  w-100  mb-2 mt-3"
                            type="submit"
                          >
                            <span className="pe-1">Place Order</span>
                          </Button>
                        )}
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>

              <div className="col-md-6 d-none d-md-block">
                <ProductSummary
                  items={cart.cartItems}
                  total={cartItemsCount}
                  option={option}
                />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CheckoutMain;
