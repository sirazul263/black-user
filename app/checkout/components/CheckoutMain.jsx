"use client";

import { Button, Spinner, Form as Form2 } from "react-bootstrap";
import * as Yup from "yup";
import { Form, Formik } from "formik";
import TextField from "../../UI/TextField";
import { useState, useEffect } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

import { useRouter } from "next/navigation";
import ProductSummary from "./ProductSummary";

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
    <div className="my-md-5 my-3">
      <h2 className="fw-bold">Checkout</h2>
      <div className="row ">
        <div className="d-md-none">
          <ProductSummary items={items} total={total} />
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

        <div className="d-none d-md-block">
          <ProductSummary items={items} total={total} />
        </div>
      </div>
    </div>
  );
};

export default CheckoutMain;
