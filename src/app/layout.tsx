import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Container } from '@/components/container'
import dynamic from 'next/dynamic'
import { NavigationMenu } from '@/components/navigation/navigation'
import { Header } from '@/components/header/header'
import Link from 'next/link'
// import ProductsContextProvider from "./contexts/product.context";

const ProductsContextProvider = dynamic(
  () => import('./contexts/product.context'),
  { ssr: false }
)

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Shop Green',
  description:
    'Um prótotipo que simula as etapas da compra de um produto de uma loja online',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-16 bg-zinc-100`}>
        <ProductsContextProvider>
          <Header>
            <Container className="h-full flex justify-between items-center">
              <Link href="/" className="font-extrabold text-2xl">
                Shop Green
              </Link>
              <NavigationMenu />
            </Container>
          </Header>
          {children}
        </ProductsContextProvider>
      </body>
    </html>
  )
}
