import type { Meta, StoryObj } from "@storybook/react";
import EmbeddingCard from "./EmbeddingCard";

const meta: Meta<typeof EmbeddingCard> = {
  title: "Components/Organisms/Embedding/EmbeddingCard",
  component: EmbeddingCard,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "임베딩 정보를 표시하는 카드 컴포넌트입니다. 로딩 상태, 아이콘, URL, 크롤링 날짜 정보를 제공합니다.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: "300px", padding: "20px" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    name: {
      control: "text",
      description: "임베딩 이름",
    },
    isLoading: {
      control: "boolean",
      description: "로딩 상태",
    },
    url: {
      control: "text",
      description: "임베딩 URL",
    },
    crawledAt: {
      control: "text",
      description: "크롤링 날짜",
    },
    docsImageAlt: {
      control: "text",
      description: "문서 이미지 대체 텍스트",
    },
    docsImageSrc: {
      control: "text",
      description: "문서 이미지 소스 URL",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "Sample Embedding",
    isLoading: false,
    url: "https://example.com",
    crawledAt: "2024-01-15",
    docsImageAlt: "Embedding Icon",
    docsImageSrc: "/embedding.png",
    onUrlClick: () => console.log("URL clicked"),
    onCrawledAtClick: () => console.log("Crawled at clicked"),
  },
};
