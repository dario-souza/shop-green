import { Product } from "@/types/products.type";

export const fetchCategories = async () => {
  const response = await fetch("https://fakestoreapi.com/products/categories");
  if (!response.ok) throw new Error();
  const data = (await response.json()) as string[];
  return data;
};
