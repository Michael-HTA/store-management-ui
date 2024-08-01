import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Store Management",
  description: "Store Management Application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-gradient-to-r from-emerald-50 via-sky-100 to-purple-100 ${inter.className}`}>
        {children}
      </body>
    </html >
  );
}
