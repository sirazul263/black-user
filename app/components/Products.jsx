"use client";

import { useRouter } from "next/navigation";
const Products = ({ res }) => {
  const router = useRouter();
  return (
    <div className="col-md-3 col-4 mb-4 d-flex justify-content-center">
      <div>
        <div
          className=" cursor-pointer"
          onClick={() => router.push(`/product/details?Id=${res.id}`)}
        >
          <img
            alt="Category"
            src={res.image_urls[0]}
            className="img-fluid product-image"
          />
        </div>
        <div className="category-name">
          <p className="fs-12 mt-3 fw-semibold mb-1">
            {res.name.toUpperCase()}
          </p>
          <p className="fw-bold ">৳ {res.sell_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
