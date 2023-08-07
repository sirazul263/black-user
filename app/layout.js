import "./globals.css";
import { Quantico } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const quantico = Quantico({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata = {
  title: "Black",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={quantico.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
