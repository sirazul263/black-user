"use client";

import { useEffect, useState } from "react";
import { getOffers } from "../../services/offerServices";
import Loader from "../../components/Loader";
const Banner = () => {
  //Fetching Data
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchOffers = async () => {
      const res = await getOffers(setLoading);
      setResult(res);
    };
    fetchOffers();
  }, []);

  return (
    <div className="container mt-md-5 mt-4">
      <marquee style={{ padding: " 10px 0" }} className="fw-bold">
        COMPLETE YOUR OUTFIT WITH CAPS. GETS AWESOME DESIGN DAILY
      </marquee>
      {loading ? (
        <Loader />
      ) : (
        <>
          {result && result.hasOwnProperty("data") && (
            <div className="row">
              {result.data.map((res, i) => (
                <div className="col-md-6" key={i}>
                  <div className="d-flex justify-content-center">
                    <img
                      alt="Category"
                      src="../../../img/banner.svg"
                      className="w-100 banner"
                    />
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Banner;
