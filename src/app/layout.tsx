import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import Header from "../components/Layout/Header/Header"
import Footer from "../components/Layout/Header/Header"
const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "Уничтожение клопов и тараканов в Астане | Профессиональная дезинсекция",
  description: "Избавим от насекомых за 1 визит с гарантией 2 года. Работаем в Астане 24/7.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <header>
          <Header />
        </header>

        <main>
          {children}
        </main>

        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}