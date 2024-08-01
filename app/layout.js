import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "وحدة ادارة الحوادث المرورية",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
      <body className=''>{children}</body>
    </html>
  );
}
