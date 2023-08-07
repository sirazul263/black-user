"use client";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoTwitter,
} from "react-icons/bi";

const Footer = () => {
  return (
    <footer>
      <div className="bg-clr-primary mt-md-5 mt-3">
        <div className="container py-md-5 py-3">
          <img src="../../img/logo.svg" alt="logo" style={{ height: 70 }} />
          <div className="row">
            <div className="col-md-5 mb-3">
              <p className="mt-md-4 fs-14" style={{ maxWidth: 270 }}>
                Company is an uprising support provider with a bunch of people
                from different fields of expertise
              </p>
              <div className="d-flex mt-md-5">
                <BiLogoFacebook size={20} />
                <BiLogoInstagramAlt size={20} className="mx-4" />
                <BiLogoLinkedin size={20} />
                <BiLogoTwitter size={20} className="mx-4" />
              </div>
            </div>
            <div className="col-md-2 mb-3">
              <p className="fw-bold">COMPANY</p>
              <ul className="widget-menu list-unstyled mb-0">
                <li className="mb-3 fs-14 fw-bold">
                  <a
                    href="/about-us"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <span className="text-dark cursor-pointer">About us</span>
                  </a>
                </li>
                <li className="mb-3 fs-14 fw-bold">
                  <a
                    href="/contact-us"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <span className="text-dark cursor-pointer">Contact us</span>
                  </a>
                </li>
                <li className="mb-3 fs-14 fw-bold">
                  <a
                    href="/career"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <span className="text-dark cursor-pointer">Career</span>
                  </a>
                </li>
                <li className="mb-3 fs-14 fw-bold">
                  <a
                    href="/faq"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <span className="text-dark cursor-pointer">FAQ</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-2 mb-3">
              <p className="fw-bold">LEGAL</p>
              <ul className="widget-menu list-unstyled mb-0">
                <li className="mb-3 fs-14 fw-bold">
                  <a
                    href="/terms-and-conditions"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <span className="text-dark cursor-pointer">
                      Terms and Condition
                    </span>
                  </a>
                </li>
                <li className="mb-3 fs-14 fw-bold">
                  <a
                    href="/privacy-policy"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <span className="text-dark cursor-pointer">
                      Privacy Policy
                    </span>
                  </a>
                </li>
                <li className="mb-3 fs-14 fw-bold">
                  <a
                    href="/career"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <span className="text-dark cursor-pointer">
                      Return Policy
                    </span>
                  </a>
                </li>
                <li className="mb-3 fs-14 fw-bold">
                  <a
                    href="/faq"
                    className="text-decoration-none"
                    target="_blank"
                  >
                    <span className="text-dark cursor-pointer">
                      Delivery Policy
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-md-3 ">
              <p className="fw-bold">CONTACT</p>
              <ul className="widget-menu list-unstyled mb-0">
                <li className="mb-3 fs-14 fw-bold">support@gmail.com</li>
                <li className="mb-3 fs-14 fw-bold">+8801742527436</li>
                <li className="mb-3 fs-14 fw-bold">
                  example Block D, <br /> Lalmatia, Dhaka - 1207
                </li>
              </ul>
            </div>
          </div>
          <div>
            <p className="fs-14 fw-bold">
              &copy;{new Date().getFullYear()}, All rights reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
