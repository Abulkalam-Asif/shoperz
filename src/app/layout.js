import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Roboto } from "next/font/google";
import { Footer, Header } from "./containers";

import { Providers } from "./store/provider";

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
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
