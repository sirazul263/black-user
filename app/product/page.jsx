import ProductMain from "./components/ProductMain";

const ProductPage = () => {
  //Pagination
  const result = [
    {
      name: "RED CAP SAMPLE",
      price: "52.00",
      image: "../../../img/product1.svg",
    },
    {
      name: "WHITE TEE SAMPLE",
      price: "52.00",
      image: "../../../img/product2.svg",
    },
    {
      name: "WHITE TEE SAMPLE",
      price: "52.00",
      image: "../../../img/product3.svg",
    },
    {
      name: "RED CAP BN SAMPLE",
      price: "52.00",
      image: "../../../img/product4.svg",
    },
    {
      name: "RED CAP SAMPLE",
      price: "52.00",
      image: "../../../img/product5.svg",
    },
    {
      name: "WHITE TEE SAMPLE",
      price: "52.00",
      image: "../../../img/product6.svg",
    },
    {
      name: "WHITE TEE SAMPLE",
      price: "52.00",
      image: "../../../img/product7.svg",
    },
    {
      name: "RED CAP BN SAMPLE",
      price: "52.00",
      image: "../../../img/product8.svg",
    },
  ];

  return (
    <div className="container mt-5 ">
      <h5 className="fw-bold mb-0">Product</h5>
      <ProductMain result={result} />
    </div>
  );
};

export default ProductPage;
