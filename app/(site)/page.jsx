import Products from "../components/Products";
import Banner from "./components/Banner";
import Category from "./components/Category";
import MainContainer from "./components/MainContainer";
import Promotion from "./components/Promotion";
import Review from "./components/Review";

export default function Home() {
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
    <main className="">
      <MainContainer />
      <Category />
      <Banner />
      <div className="mt-md-5 mt-4 ">
        <div className="container ">
          <div className="row">
            {result.map((product, index) => (
              <Products res={product} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Promotion />
      <Review />
    </main>
  );
}
