"use client";

import { useRouter } from "next/navigation";
const Products = ({ res }) => {
  const router = useRouter();
  const hasOffer = parseInt(res.offered_price) !== parseInt(res.sell_price);
  const offer = hasOffer ? res.offers[res.offers.length - 1] : "";
  const offerText = hasOffer
    ? offer.discount_type === "amount"
      ? `৳ ${offer.discount} 
    off ${offer.campaign_name}`
      : `${offer.discount}% 
    off ${offer.campaign_name}`
    : "";
  return (
    <div className="col-md-3 col-6 mb-4 d-flex justify-content-center">
      <div>
        <div
          className="position-relative cursor-pointer"
          onClick={() => router.push(`/product/details?Id=${res.id}`)}
        >
          <img
            alt="Category"
            src={res.image_urls[0]}
            className="img-fluid product-image"
          />
          {hasOffer && (
            <div className="top-right fs-12 text-white">{offerText}</div>
          )}
        </div>
        <div className="category-name">
          <p className="fs-12 mt-3 fw-semibold mb-1">
            {res.name.toUpperCase()}
          </p>
          {hasOffer ? (
            <p className="fw-bold ">
              ৳ {res.offered_price}{" "}
              <del className="ms-3 " style={{ color: "#B1A0A0" }}>
                ৳{res.sell_price}
              </del>{" "}
            </p>
          ) : (
            <p className="fw-bold ">৳ {res.sell_price} </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
