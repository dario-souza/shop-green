import { Container } from '@/components/container'
import { Footer } from '@/components/footer/footer'
import ProductsCards from '@/components/products/products.cards'
import { baseUrl, fetchDataProducts } from '@/services/api/fetch.data'
import { Product } from '@/types/products.type'

export default async function Home() {
  const data = await fetchDataProducts<Product[]>(baseUrl)
  return (
    <main>
      <Container className="h-[calc(100vh-(64px+80px+16px))] overflow-auto">
        <ProductsCards product={data} />
      </Container>
      <Footer />
    </main>
  )
}
