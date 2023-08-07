"use client";

import { useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ result }) => {
  const [pageNumber, setPageNumber] = useState(0);
  const dataPerPage = 10;
  const pagesVisited = pageNumber * dataPerPage;

  const pageCount = Math.ceil(result.length / dataPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };
  return (

  );
};
export default Pagination;
