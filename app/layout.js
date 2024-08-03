import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "وحدة ادارة الحوادث المرورية",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      <Analytics/>
      <body className=''>{children}</body>
    </html>
  );
}
