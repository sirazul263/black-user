"use client";

import MenuBar from "./MenuBar";
import TopBar from "./TopBar";
import { useContext, useEffect, useState } from "react";
import { Store } from "../utils/Store";
import { CategoryContext } from "../utils/CategoryContext";

const Header = () => {
  const { state, dispatch } = useContext(Store);
  const { categories } = useContext(CategoryContext);
  const { cart } = state;
  const [cartItemsCount, setCartItemsCount] = useState(0);
  useEffect(() => {
    setCartItemsCount(
      cart.cartItems.reduce((a, c) => a + c.variation.quantity, 0)
    );
  }, [cart]);
  return (
    <div>
      <TopBar cartItemsCount={cartItemsCount} />
      <div className="d-none d-md-block">
        <MenuBar categories={categories} />
      </div>
    </div>
  );
};

export default Header;
