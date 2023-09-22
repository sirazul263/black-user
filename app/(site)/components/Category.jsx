"use client";

import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CategoryContext } from "../../utils/CategoryContext";

const Category = () => {
  const router = useRouter();
  const { categories } = useContext(CategoryContext);

  return (
    <div className="container mt-md-5 mt-4">
      {categories && categories.length > 0 && (
        <div className="row">
          {categories.map((category, i) => (
            <div className="col-md-3 col-6 " key={i}>
              <div className="d-flex justify-content-center ">
                <img
                  alt="Category"
                  src={category.image_urls[0]}
                  className="img-fluid cursor-pointer category-image"
                  onClick={() =>
                    router.push(`/product?category_id=${category.id}`)
                  }
                />
              </div>
              <p className="fw-bold text-center">
                {category.name.toUpperCase()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
