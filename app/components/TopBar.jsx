"use client";

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import MenuModal from "./MenuModal";
import { getProducts } from "../services/productServices";

const TopBar = ({ cartItemsCount }) => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (text) {
      if (!isOpen) {
        setIsOpen(true);
      }
      const fetchProducts = async () => {
        const products = await getProducts(setLoading, "", text);
        if (products.hasOwnProperty("data") && products.data.length > 0) {
          setResult(products);
        }
      };
      fetchProducts();
    }
  }, [text]);

  useEffect(() => {
    if (!text) {
      setIsOpen(false);
    }
  }, [text]);

  return (
    <div className="bg-clr-primary py-2">
      <div className="container ">
        <div className="row">
          <div className="col-md-4 col-2">
            <div className="d-md-block d-none">
              <img
                src="../../img/logo.svg"
                alt="logo"
                style={{ maxHeight: 70 }}
                className="cursor-pointer"
                onClick={() => router.push("/")}
              />
            </div>
            <div className="d-block d-md-none">
              <img
                src="../../img/logo.svg"
                alt="logo"
                style={{ maxHeight: 50 }}
                className="cursor-pointer"
                onClick={() => router.push("/")}
              />
            </div>
          </div>
          <div className="col-md-4 col-10">
            <div className="search-bar mt-md-3 ">
              <div className="search-box position-relative ">
                <button
                  className="btn position-absolute start-0 py-2"
                  type="button"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mb-1 ms-1"
                  >
                    <path
                      d="M21.7104 20.2899L18.0004 16.6099C19.4405 14.8143 20.1379 12.5352 19.9492 10.2412C19.7605 7.94721 18.7001 5.81269 16.9859 4.27655C15.2718 2.74041 13.0342 1.91941 10.7333 1.98237C8.43243 2.04534 6.24311 2.98747 4.61553 4.61505C2.98795 6.24263 2.04582 8.43194 1.98286 10.7328C1.9199 13.0337 2.7409 15.2713 4.27704 16.9854C5.81318 18.6996 7.94769 19.76 10.2417 19.9487C12.5357 20.1374 14.8148 19.44 16.6104 17.9999L20.2904 21.6799C20.3834 21.7736 20.494 21.848 20.6158 21.8988C20.7377 21.9496 20.8684 21.9757 21.0004 21.9757C21.1324 21.9757 21.2631 21.9496 21.385 21.8988C21.5068 21.848 21.6174 21.7736 21.7104 21.6799C21.8906 21.4934 21.9914 21.2442 21.9914 20.9849C21.9914 20.7256 21.8906 20.4764 21.7104 20.2899ZM11.0004 17.9999C9.61592 17.9999 8.26255 17.5894 7.1114 16.8202C5.96026 16.051 5.06305 14.9578 4.53324 13.6787C4.00342 12.3996 3.8648 10.9921 4.1349 9.63427C4.40499 8.27641 5.07168 7.02912 6.05065 6.05016C7.02961 5.07119 8.27689 4.4045 9.63476 4.13441C10.9926 3.86431 12.4001 4.00293 13.6792 4.53275C14.9583 5.06256 16.0515 5.95977 16.8207 7.11091C17.5899 8.26206 18.0004 9.61544 18.0004 10.9999C18.0004 12.8564 17.2629 14.6369 15.9501 15.9497C14.6374 17.2624 12.8569 17.9999 11.0004 17.9999Z"
                      fill="#3D3A3A"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  name="search"
                  className="form-control border-0 py-2 ps-5 radius-32"
                  placeholder="Search"
                  onChange={(e) => setText(e.target.value)}
                  value={text}
                />
                <MenuModal isOpen={isOpen} setIsOpen={setIsOpen}>
                  <div className="result-list">
                    <div>
                      {loading ? (
                        <p className="text-center">Loading...</p>
                      ) : (
                        <div>
                          {result ? (
                            <div className="px-4 pb-3 text-dark ">
                              {result.data.map((res, i) => (
                                <div
                                  key={i}
                                  onClick={() => {
                                    router.push(
                                      `/product/details?Id=${res.id}`
                                    );
                                    setIsOpen(false);
                                    setText("");
                                  }}
                                  className="d-flex"
                                >
                                  <img
                                    alt="Category"
                                    src={res.image_urls[0]}
                                    className="img-fluid me-2"
                                    style={{
                                      height: 25,
                                      width: 30,
                                      borderRadius: 5,
                                    }}
                                  />
                                  <p className="mb-1 fw-bold cursor-pointer hover-class">
                                    {res.name.toUpperCase()}
                                  </p>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="text-center">
                              <p>No results found !</p>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                </MenuModal>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-none d-md-flex align-items-center justify-content-end">
            <div
              className="d-flex align-items-center cursor-pointer "
              onClick={() =>
                cartItemsCount > 0 ? router.push("/checkout") : {}
              }
            >
              <div>
                <div className="cart position-relative bg-white me-4">
                  <div className="">Cart</div>
                  <div className="position-absolute top-0 mt-1 end-0 cart-number  bg-clr-primary px-1 py-0">
                    <p className="mb-0 fs-12"> {cartItemsCount}</p>
                  </div>
                </div>
              </div>

              <div className="avatar">
                <div className="position-relative">
                  <img
                    src="../../img/avatar.svg"
                    alt="avatar"
                    className="w-100"
                  />
                  <div className="position-absolute bottom-0 end-0">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="11"
                        height="11"
                        rx="5.5"
                        fill="#36B37E"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="11"
                        height="11"
                        rx="5.5"
                        stroke="white"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
