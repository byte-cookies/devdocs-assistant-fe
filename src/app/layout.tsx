import { geistMono, geistSans } from "@/styles/fonts/fonts";
import "@/styles/tailwindConfig.css";
import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
