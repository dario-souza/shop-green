import { Container } from "@/components/container";
import { ProductCard } from "@/components/product.card";
import { baseUrl, fetchDataProducts } from "@/services/api/fetch.data";
import { Product } from "@/types/products.type";


export default async function Home() {
  const data = await fetchDataProducts<Product[]>(baseUrl)
  return (
    <Container>
      <h1>produtos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 min-[950px]:grid-cols-4 gap-2 md:gap-4">
        {
          data.map(prod => (
            <ProductCard key={prod.id} data={prod} />
          ))
        }
      </div>
    </Container>
  );
}
