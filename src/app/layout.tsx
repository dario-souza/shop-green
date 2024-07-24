import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@/components/container";
import dynamic from "next/dynamic";
import { NavigationMenu } from "@/components/navigation/navigation";
import { Header } from "@/components/header/header";
// import ProductsContextProvider from "./contexts/product.context";

const ProductsContextProvider = dynamic(() => import("./contexts/product.context"), { ssr: false })


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mercadin se zé",
  description: "Um mercadinho fictício",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} pt-16 bg-zinc-100`}>
        <ProductsContextProvider>
          <Header>
            <Container className="h-full flex justify-between items-center">
              <a href="#" className="font-extrabold text-2xl">Shop Green</a>
              <NavigationMenu />
            </Container>
          </Header>
          {children}
        </ProductsContextProvider>
      </body>
    </html>
  );
}
