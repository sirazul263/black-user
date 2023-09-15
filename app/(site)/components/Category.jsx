"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getCategories } from "../../services/categoryServices";
import Loader from "../../components/Loader";

const Category = () => {
  const router = useRouter();
  //Fetching Data
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories(setLoading);
      setResult(categories);
    };
    fetchCategories();
  }, []);

  return (
    <div className="container mt-md-5 mt-4">
      {loading ? (
        <Loader />
      ) : (
        <>
          {result && result.length > 0 && (
            <div className="row">
              {result.map((category, i) => (
                <div className="col-md-3 col-6 " key={i}>
                  <div className="d-flex justify-content-center ">
                    <img
                      alt="Category"
                      src={category.image_urls[0]}
                      className="img-fluid cursor-pointer category-image"
                      onClick={() => router.push("/product")}
                    />
                  </div>
                  <p className="fw-bold text-center">
                    {category.name.toUpperCase()}
                  </p>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Category;
