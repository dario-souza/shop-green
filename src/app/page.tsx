import { Container } from "@/components/container";
import { Footer } from "@/components/footer/footer";
import ProductsCards from "@/components/products/products.cards";
import { baseUrl, fetchDataProducts } from "@/services/api/fetch.data";
import { Product } from "@/types/products.type";

export default async function Home() {
  const data = await fetchDataProducts<Product[]>(baseUrl)
  return (
    <main>
      <Container>
        <ProductsCards product={data} />
      </Container>
      <Footer />
    </main>
  );
}
