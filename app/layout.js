import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Radio_Canada } from "@next/font/google";

export const metadata = {
  title: "Somil Gupta G",
  description: "The Website which is a website",
};
const font = Radio_Canada({
  subsets: ["vietnamese"],
  weight: ["400", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{ fontFamily: font.style.fontFamily }}
        className="overflow-x-hidden px-2 bg-clip-border bg-gradient-to-bl from-black to-slate-800 text-white min-h-screen"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
