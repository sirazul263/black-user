import Banner from "./components/Banner";
import Category from "./components/Category";
import MainContainer from "./components/MainContainer";
import Products from "./components/Products";
import Promotion from "./components/Promotion";
import Review from "./components/Review";

export default function Home() {
  return (
    <main className="">
      <MainContainer />
      <Category />
      <Banner />
      <div className="mt-md-5 mt-4">
        <Products />
      </div>
      <Promotion />
      <Review />
    </main>
  );
}
