"use client";

import { Button, Spinner, Form as Form2 } from "react-bootstrap";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import TextField from "../../UI/TextField";
import { useState, useEffect } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { RiDeleteBinLine } from "react-icons/ri";
import { useRouter } from "next/navigation";

const CheckoutMain = ({ items }) => {
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

  //Count total
  const total = items.reduce((a, c) => a + c.price * c.quantity, 0);

  //Hydration

  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="row my-5">
      <div className="col-md-6 mb-4">
        <h2 className="fw-bold">Checkout</h2>

        <div className="form-body py-3 px-4 primary-input">
          <Formik
            initialValues={{
              full_name: "",
              phone: "",
              address: "",
            }}
            validationSchema={validate}
            onSubmit={async (values) => {
              router.push("/booking-success");
              // const data = {
              //   phone: `+${values.phone}`,
              //   password: values.password,
              // };
              // const res = await commonLogin(data, setLoading);
              // if (res.status === 1) {
              //   router.reload(
              //     query.hasOwnProperty("redirect") ? query.redirect : "/"
              //   );
              // } else if (typeof res.msg === "object") {
              //   setError(Object.values(res.msg)[0][0]);
              // } else {
              //   setError(res.msg);
              // }
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

      <div className="col-md-6 mb-4">
        <div className="is-shadow p-4 radius-16">
          <h5 className="fw-bold">
            Cart <span className="text-muted">(3 Item)</span>
          </h5>
          <div
            className="row fw-bold py-3 radius-8 mt-4 px-2 fs-14 text-muted"
            style={{ backgroundColor: "#F4F6F8" }}
          >
            <div className="col-4">Product</div>
            <div className="col-2">Price</div>
            <div className="col-3">Quantity</div>
            <div className="col-3">Total Price</div>
          </div>

          {items.map((item, i) => (
            <div className="row fw-bold pt-3 radius-8  px-2 " key={i}>
              <div className="col-4 d-flex align-items-center">
                <div>
                  <img src={item.image} alt="Item" className="img-fluid" />
                </div>
                <div className="ms-3">
                  <p className="mb-1 fs-14">{item.name}</p>
                  <p className="mb-0 text-muted fs-13">
                    size : <span className="text-dark">{item.size}</span>
                  </p>
                </div>
              </div>
              <div className="col-2 d-flex align-items-center fs-14">
                ${item.price}
              </div>
              <div className="col-3 d-flex align-items-center ">
                <div
                  className="radius-8  d-flex justify-content-between align-items-center"
                  style={{ border: "1px solid #ccc", padding: "3px 5px" }}
                >
                  <button className="border-0 bg-transparent">
                    <AiOutlineMinus size={12} />
                  </button>
                  <div className="px-3 fs-13 pt-1">{item.quantity}</div>
                  <button className="border-0 bg-transparent">
                    <AiOutlinePlus size={12} />
                  </button>
                </div>
              </div>
              <div className="col-3 d-flex align-items-center justify-content-between">
                <div className="fs-14"> ৳{item.quantity * item.price}</div>
                <div className="cursor-pointer">
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
                <p className="fw-bold ">৳{total}</p>
              </div>
              <div className="d-flex justify-content-between fs-18 mt-3">
                <p className="fw-bold">Total</p>
                <div className="text-end">
                  <p className="fw-bold mb-1 text-danger">৳{total}</p>
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
    </div>
  );
};

export default CheckoutMain;
