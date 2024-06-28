import { Container } from "@/components/container";
import ProductsCards from "@/components/products.cards";
import { baseUrl, fetchDataProducts } from "@/services/api/fetch.data";
import { Product } from "@/types/products.type";

export default async function Home() {
  const data = await fetchDataProducts<Product[]>(baseUrl)
  return (
    <Container>
      <ProductsCards product={data} />
    </Container>
  );
}
