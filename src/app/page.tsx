import { Container } from "@/components/container";
import dynamic from "next/dynamic";
// import ProductsCards from "@/components/products.cards";
import { baseUrl, fetchDataProducts } from "@/services/api/fetch.data";
import { Product } from "@/types/products.type";
const ProductsCards = dynamic(() => import("@/components/products.cards"), { ssr: false })

export default async function Home() {
  const data = await fetchDataProducts<Product[]>(baseUrl)
  return (
    <Container>
      <h1>produtos</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 min-[950px]:grid-cols-4 gap-2 md:gap-4">
        <ProductsCards product={data} />
      </div>
    </Container>
  );
}
