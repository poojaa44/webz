import {
  Croissant_One,
  Geist,
  Geist_Mono,
  Orbitron,
  Poppins,
} from "next/font/google";
import "./globals.css";
import Header from "./my-components/Header";
import Footer from "./my-components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // You can adjust weights
  variable: "--font-poppins", // Useful for CSS variables
  display: "swap",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-orbitron",
  display: "swap",
});

const crossiant = Croissant_One({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-logo",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable}  antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
