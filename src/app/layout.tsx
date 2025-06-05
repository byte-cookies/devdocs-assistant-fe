//수정----------------------------------------------------------------------
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import QueryProvider from "./_component/QueryProvider";
//-------------------------------------------------------------------------

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "./_component/Sidebar";
import EmbeddingBar from "./_component/EmbeddingBar";

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
  //수정 -------------------------------------------------------------
  const queryClient = new QueryClient();
  // -----------------------------------------------------------------
  return (
    /*
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex h-screen">
          <Sidebar />
          <main className="w-full h-full">{children}</main>
          <EmbeddingBar />
        </div>
      </body>
    </html>
    */
   <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <QueryProvider>
          <div className="flex h-screen">
            <Sidebar />
            <main className="w-full h-full">{children}</main>
            <EmbeddingBar />
          </div>
        </QueryProvider>
        </body>
    </html>
  );
}
