import CheckoutMain from "./components/CheckoutMain";
const CheckoutPage = () => {
  const items = [
    {
      name: "Red shoe",
      size: 9,
      image: "../../../img/shoe1.svg",
      price: 300,
      quantity: 1,
    },
    {
      name: "White shoe",
      size: 9,
      image: "../../../img/shoe2.svg",
      price: 279,
      quantity: 1,
    },
  ];
  return (
    <div className="container">
      <CheckoutMain items={items} />
    </div>
  );
};

export default CheckoutPage;
