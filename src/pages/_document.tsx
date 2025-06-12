import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="antialiased">
        <Navbar />
        <Main />
        <NextScript />
        <Footer />
      </body>
    </Html>
  );
}
