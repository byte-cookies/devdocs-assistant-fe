import EmbeddingBar from "@/components/organisms/(embedding)/EmbeddingBar";
import UserInfoBar from "@/components/organisms/(user)/UserInfoBar";
import { ChatLayout } from "@/components/templates/ChatLayout";
import MainLayout from "@/components/templates/MainLayout";

export default function HomePage() {
  return (
    <MainLayout
      leftSidebar={<UserInfoBar />}
      rightSidebar={<EmbeddingBar />}
      mainContent={<ChatLayout />}
    />
  );
}
