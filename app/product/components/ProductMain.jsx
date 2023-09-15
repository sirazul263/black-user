"use client";
import Products from "../../components/Products";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { getProducts } from "../../services/productServices";
import Loader from "../../components/Loader";

const ProductMain = () => {
  //Fetching Data
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;

  useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts(setLoading);
      setResult(products);
    };
    fetchProducts();
  }, []);

  const pageCount = Math.ceil(result && result.length / dataPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };

  const displayProducts =
    result &&
    result.slice(pagesVisited, pagesVisited + dataPerPage).map((res, index) => {
      return <Products res={res} key={index} />;
    });

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container pt-5">
            <div className="row">{displayProducts}</div>
          </div>
          <div className="pagination mt-5 flex justify-content-center">
            <ReactPaginate
              previousLabel={
                <span aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.04102 11.0833L4.95768 6.99996L9.04102 2.91663"
                      stroke="#9B98B4"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              }
              nextLabel={
                <span aria-hidden="true">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.95898 11.0833L9.04232 6.99996L4.95898 2.91663"
                      stroke="#79828D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              }
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={`paginationBtn`}
              previousLinkClassName={"previousBtn"}
              nextLinkClassName={"nextBtn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActiveBtn"}
            />
          </div>
        </>
      )}
    </div>
  );
};
export default ProductMain;
