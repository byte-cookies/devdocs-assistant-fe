"use client";

import EmbeddingBar from "@/components/organisms/(embedding)/EmbeddingBar";
import UserInfoBar from "@/components/organisms/(user)/UserInfoBar";
import Providers from "@/components/Providers";
import { ChatLayout } from "@/components/templates/ChatLayout";
import MainLayout from "@/components/templates/MainLayout";

export default function HomePage() {
  return (
    <Providers>
      <MainLayout
        leftSidebar={<UserInfoBar />}
        rightSidebar={<EmbeddingBar />}
        mainContent={<ChatLayout />}
      />
    </Providers>
  );
}
