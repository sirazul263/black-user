"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GoHome } from "react-icons/go";
import { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import Sidebar from "./Sidebar";
import { CategoryContext } from "../utils/CategoryContext";

const BottomNavbar = () => {
  const router = useRouter();

  const { state, dispatch } = useContext(Store);
  const { categories } = useContext(CategoryContext);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(
      cart.cartItems.reduce((a, c) => a + c.variation.quantity, 0)
    );
  }, [cart]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Sidebar
        isOpen={isOpen}
        toggleDrawer={toggleDrawer}
        categories={categories}
      />{" "}
      <div
        className="d-md-none position-fixed start-0 bottom-0 end-0 bg-white py-2 px-4 is-shadow"
        style={{
          zIndex: 100,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
        }}
      >
        <div className="d-flex align-items-center justify-content-between">
          <Link href="/" className="text-decoration-none ">
            <div className="text-center text-dark">
              <GoHome size={24} />
              <p className="mb-0 fs-12 fw-bold"> Home</p>
            </div>
          </Link>

          <div
            className="text-center cursor-pointer"
            onClick={() => (cartItemsCount > 0 ? router.push("/checkout") : {})}
          >
            <div className="bottom-cart position-relative bg-white">
              <div>
                <div className="">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.0752 6.75H22.3127C22.662 6.75001 23.0074 6.82321 23.3266 6.96488C23.6459 7.10655 23.9319 7.31354 24.1663 7.57252C24.4006 7.83149 24.5781 8.1367 24.6873 8.46847C24.7965 8.80024 24.8349 9.15121 24.8002 9.49875L24.0502 16.9988C23.9885 17.6156 23.6998 18.1876 23.2402 18.6036C22.7805 19.0196 22.1827 19.25 21.5627 19.25H9.6252C9.04704 19.2502 8.48667 19.0501 8.0395 18.6836C7.59233 18.3171 7.28601 17.8069 7.1727 17.24L5.0752 6.75Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.0752 6.75L4.0627 2.69625C3.99498 2.42594 3.83889 2.18601 3.6192 2.01457C3.39952 1.84313 3.12886 1.75001 2.8502 1.75H1.3252M8.8252 24.25H11.3252M18.8252 24.25H21.3252"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div className="position-absolute top-0 mt-1 cart-number2 text-danger bg-white  px-1 py-0">
                <p className="mb-0 fw-bold">{cartItemsCount} </p>
              </div>
            </div>
          </div>
          <div className="text-center text-clr-primary" onClick={toggleDrawer}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_47_4578)">
                <path
                  d="M13.8252 5.5H21.8252"
                  stroke="#A9A5A5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8252 9.5H18.8252"
                  stroke="#A9A5A5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8252 15.5H21.8252"
                  stroke="#A9A5A5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.8252 19.5H18.8252"
                  stroke="#A9A5A5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.8252 4.5H4.8252C4.27291 4.5 3.8252 4.94772 3.8252 5.5V9.5C3.8252 10.0523 4.27291 10.5 4.8252 10.5H8.8252C9.37748 10.5 9.8252 10.0523 9.8252 9.5V5.5C9.8252 4.94772 9.37748 4.5 8.8252 4.5Z"
                  stroke="#A9A5A5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.8252 14.5H4.8252C4.27291 14.5 3.8252 14.9477 3.8252 15.5V19.5C3.8252 20.0523 4.27291 20.5 4.8252 20.5H8.8252C9.37748 20.5 9.8252 20.0523 9.8252 19.5V15.5C9.8252 14.9477 9.37748 14.5 8.8252 14.5Z"
                  stroke="#A9A5A5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_47_4578">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.825195 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default BottomNavbar;
