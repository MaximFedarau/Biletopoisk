import { ReactNode } from "react";
import { Roboto } from "next/font/google";

import { Header, Footer } from "@/components/Layout";
import { ReduxProvider } from "@/components/ReduxProvider";

import "./globals.scss";

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>
        <ReduxProvider>
          <div id="dropdown-root" className="dropdown-root" />
          <Header />
          {children}
          <Footer />
        </ReduxProvider>
      </body>
    </html>
  );
}
