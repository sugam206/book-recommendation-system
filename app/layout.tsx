import type { Metadata } from "next";
import "./globals.css";

import Nav from "./components/layout/Nav";


export const metadata: Metadata = {
  title: "Book Recommendation System",
  description: "Discover and rent your favorite books",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased bg-[#D7B19D]">
        <Nav />
        <div className="  ">
          <main className="  py-2 ">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
