import "./globals.css";
import { Inter } from "next/font/google";

import preview from "./../assets/preview.png";

const inter = Inter({ subsets: ["latin"] });

const title = "Guarda la K";
const description = "🎲🎲🎲🎲🎲";

export const metadata = {
  title,
  description,
  openGraph: {
    url: "https://guardalak.oscarinadev.com/",
    type: "website",
    title,
    description,
    images: preview.src,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: preview.src,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
