import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Igniteway",
  description: "Invest Your Idea Build Your Dream",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark"> {/* <-- Force dark mode */}
    <head>
      <link rel="icon" href="/favicon.ico" />
    </head>
      <body className={`${geistSans.variable} ${geistMono.variable}  antialiased bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
