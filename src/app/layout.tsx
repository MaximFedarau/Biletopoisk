import { ReactNode } from "react";
import { Roboto } from "next/font/google";

import "./globals.css";

const roboto = Roboto({
  subsets: ["cyrillic", "latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
