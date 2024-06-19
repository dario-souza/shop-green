import { Container } from "@/components/container";
import { ProductCard } from "@/components/product.card";


export default function Home() {
  return (
    <Container>
      <h1>produtos</h1>
      <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 md:gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <ProductCard key={index} />
        ))}
      </div>
    </Container>
  );
}
