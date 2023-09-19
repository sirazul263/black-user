import "./globals.css";
import { Quantico } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BottomNavbar from "./components/BottomNavbar";
import { StoreProvider } from "./utils/Store";
import { CategoryProvider } from "./utils/CategoryContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
        <StoreProvider>
          <CategoryProvider>
            <ToastContainer position="top-center" limit={1} />
            <Header />
            <BottomNavbar />
            {children}
            <Footer />
          </CategoryProvider>
        </StoreProvider>
      </body>
    </html>
  );
}
