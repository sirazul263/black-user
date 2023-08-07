"use client";

import { useRouter } from "next/navigation";
const Products = ({ res }) => {
  const router = useRouter();
  return (
    <div className="col-md-3 col-6 mb-4">
      <div
        className="d-flex justify-content-center cursor-pointer"
        onClick={() => router.push("/product/details")}
      >
        <img alt="Category" src={res.image} className="img-fluid" />
      </div>
      <div className="ms-3 ps-1">
        <p className="fs-12 mt-3 fw-semibold mb-1">{res.name}</p>
        <p className="fw-bold ">৳${res.price}</p>
      </div>
    </div>
  );
};

export default Products;
