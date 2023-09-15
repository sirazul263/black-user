"use client";

import { useEffect, useState } from "react";
import Products from "../../components/Products";
import Loader from "../../components/Loader";
import { getProducts } from "../../services/productServices";

const SampleProduct = () => {
  //Fetching Data
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts(setLoading);
      setResult(products);
    };
    fetchProducts();
  }, []);
  return (
    <div className="mt-md-5 mt-4 ">
      <div className="container ">
        {loading ? (
          <Loader />
        ) : (
          <div className="row">
            {result &&
              result.length > 0 &&
              result.map((product, index) => (
                <Products res={product} key={index} />
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SampleProduct;
