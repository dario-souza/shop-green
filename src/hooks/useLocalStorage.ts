"use client";
import { Product } from "@/types/products.type";
import React from "react";

const useLocalStorage = (
  key: string,
  initialValue: Product[],
): [Product[], React.Dispatch<React.SetStateAction<Product[]>>] => {
  const [state, setState] = React.useState(() => {
    const localValue = window.localStorage.getItem(key);
    return localValue ? JSON.parse(localValue) : initialValue;
  });

  React.useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default useLocalStorage;
