"use client";

import { createContext, useEffect } from "react";
import { useState } from "react";
import { getCategories } from "../services/categoryServices";

export const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchCategories = async () => {
      const categories = await getCategories(setLoading);
      setCategories(categories);
    };
    fetchCategories();
  }, []);
  return (
    <CategoryContext.Provider value={{ categories, loading }}>
      {children}
    </CategoryContext.Provider>
  );
};
