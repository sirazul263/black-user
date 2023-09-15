import Banner from "./components/Banner";
import Category from "./components/Category";
import MainContainer from "./components/MainContainer";
import SampleProduct from "./components/SampleProduct";
import Promotion from "./components/Promotion";
import Review from "./components/Review";

export default async function Home() {
  return (
    <main className="">
      <MainContainer />
      <Category />
      <Banner />
      <SampleProduct />
      <Promotion />
      <Review />
    </main>
  );
}
