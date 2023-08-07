"use client";

import { useRouter } from "next/navigation";

const Category = () => {
  const router = useRouter();
  return (
    <div className="container mt-md-5 mt-4">
      <div className="row">
        <div className="col-md-3 col-6 ">
          <div className="d-flex justify-content-center ">
            <img
              alt="Category"
              src="../../../img/category1.svg"
              className="img-fluid cursor-pointer"
              onClick={() => router.push("/product")}
            />
          </div>
          <p className="fw-bold text-center">BLACK BRAND</p>
        </div>
        <div className="col-md-3 col-6">
          <div className="d-flex justify-content-center">
            <img alt="Category" src="../../../img/category2.svg" />
          </div>
          <p className="fw-bold text-center">MAN CLOTH</p>
        </div>
        <div className="col-md-3 col-6">
          <div className="d-flex justify-content-center">
            <img alt="Category" src="../../../img/category3.svg" />
          </div>
          <p className="fw-bold text-center">WOMEN CLOTH</p>
        </div>
        <div className="col-md-3 col-6">
          <div className="d-flex justify-content-center">
            <img alt="Category" src="../../../img/category4.svg" />
          </div>
          <p className="fw-bold text-center">KID CLOTH</p>
        </div>
      </div>
    </div>
  );
};

export default Category;
