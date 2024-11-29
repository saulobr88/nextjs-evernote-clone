import localFont from "next/font/local";

import "../../app/globals.css";

import NavBar from "@/components/navbar";

const geistSans = localFont({
    src: "../../app/fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
  
const geistMono = localFont({
    src: "../../app/fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export default function MainLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
        <div
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
          <NavBar />
          <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            {children}
          </main>
        </div>
      </div>
    );
}