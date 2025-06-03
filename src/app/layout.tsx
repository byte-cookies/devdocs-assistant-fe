import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import EmbeddingBar from "./_component/EmbeddingBar";
import Sidebar from "./_component/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DevDocs AI",
  description:
    "DevDocs AI is a tool for developers to search and find answers to their questions quickly and easily.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex min-w-screen h-screen gap-x-[1.5rem]`}
      >
        <aside className="w-[19.5rem] hidden sm:block h-full">
          <Sidebar />
        </aside>
        <main className="w-full h-full w-min-[34.375rem]">{children}</main>
        <aside className="w-[19.5rem] md:block hidden h-full">
          <EmbeddingBar />
        </aside>
      </body>
    </html>
  );
}
