import "./globals.css";
import { Inter } from "next/font/google";

import preview from "./../assets/preview.png";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

const title = "Guarda la K";
const description = "🎲🎲🎲🎲🎲";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://guardalak.oscarinadev.com/"),
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
