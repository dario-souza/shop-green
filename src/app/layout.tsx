import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@/components/container";
import dynamic from "next/dynamic";
import { NavigationMenu } from "@/components/navigation/navigation";
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
      <body className={`${inter.className} pt-16 bg-emerald-50`}>
        <ProductsContextProvider>
          <header className="h-16 shadow-md fixed top-0 right-0 w-full z-50 bg-emerald-400">
            <Container className="h-full flex justify-between items-center">
              <a href="#" className="font-extrabold text-2xl">Magazine do Verdão</a>
              <NavigationMenu />
            </Container>
          </header>
          {children}
        </ProductsContextProvider>
      </body>
    </html>
  );
}
