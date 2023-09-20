import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Roboto } from "next/font/google";
import { Footer } from "./containers";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Shoperz | Home",
  description: "Shoperz is an online Computers Shop.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {children}
        <Footer />
      </body>
    </html>
  );
}
