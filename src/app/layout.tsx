import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Container } from "@/components/container";
import { NavLink } from "@/components/navlink";

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
      <body className={inter.className}>
        <header className="h-16 border">
          <Container className="h-full flex justify-between items-center">
            <a href="#">Logo</a>
            <nav className="flex gap-4">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/cart">Carrinho</NavLink>
              <NavLink href="/about">Sobre</NavLink>
            </nav>
          </Container>

        </header>
        {children}
      </body>
    </html>
  );
}
