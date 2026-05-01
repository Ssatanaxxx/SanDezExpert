import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.scss";
import { Header } from "../components/Layout/Header/Header"
import { Footer } from "@/components/Layout/Footer/Footer";
const inter = Inter({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
  title: "SANDEZEXPERT — Дезинсекция в Астане | Уничтожение насекомых, запахов и плесени",
  description: "Избавим от насекомых, неприятных запахов и плесени за 1 визит с гарантией 2 года. Безопасные препараты. Работаем в Астане 24/7. Бесплатный осмотр!",
  icons: {
    icon: [
      {url: '/favicon/favicon.ico'},
      {url: '/favicon/faviconIco.svg', type: 'image/svg+xml'},
    ],
    apple: [
      {url: '/favicon/apple-favicon.png'},
    ],
  }
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