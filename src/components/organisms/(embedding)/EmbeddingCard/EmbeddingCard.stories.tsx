import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { EmbeddingCard } from "./EmbeddingCard";

const meta: Meta<typeof EmbeddingCard.Root> = {
  title: "Organisms/Embedding/EmbeddingCard",
  component: EmbeddingCard.Root,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "EmbeddingCard is a compound component for displaying embedding information with metadata, actions, and interactive features.",
      },
    },
  },
  argTypes: {
    id: {
      control: { type: "text" },
      description: "Unique identifier for the embedding",
    },
    title: {
      control: { type: "text" },
      description: "Title of the embedding",
    },
    description: {
      control: { type: "text" },
      description: "Description of the embedding",
    },
    dimensions: {
      control: { type: "number" },
      description: "Number of dimensions in the embedding vector",
    },
    modelName: {
      control: { type: "text" },
      description: "Name of the model used to generate the embedding",
    },
    similarity: {
      control: { type: "number", min: 0, max: 1, step: 0.01 },
      description: "Similarity score (0-1)",
    },
  },
  args: {
    onView: fn(),
    onEdit: fn(),
    onDelete: fn(),
    onDownload: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <EmbeddingCard.Root
        {...args}
        id="emb-1"
        title="문서 임베딩 #1"
        description="React 컴포넌트 설계 패턴에 대한 문서의 임베딩 벡터입니다."
        dimensions={1536}
        modelName="text-embedding-ada-002"
        createdAt="2024-01-15"
        source="docs/react-patterns.md"
        similarity={0.89}
      >
        <EmbeddingCard.Header>
          <EmbeddingCard.Title />
          <EmbeddingCard.Badge />
        </EmbeddingCard.Header>
        <EmbeddingCard.Content>
          <EmbeddingCard.Description />
          <EmbeddingCard.Metadata>
            <EmbeddingCard.MetadataItem label="생성일" value="2024-01-15" />
            <EmbeddingCard.MetadataItem
              label="소스"
              value="docs/react-patterns.md"
            />
          </EmbeddingCard.Metadata>
          <EmbeddingCard.EmbeddingInfo />
        </EmbeddingCard.Content>
        <EmbeddingCard.Footer>
          <div className="flex gap-2">
            <EmbeddingCard.ViewButton />
            <EmbeddingCard.EditButton />
          </div>
          <div className="flex gap-2">
            <EmbeddingCard.DownloadButton />
            <EmbeddingCard.DeleteButton />
          </div>
        </EmbeddingCard.Footer>
      </EmbeddingCard.Root>
    </div>
  ),
};

export const HighSimilarity: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <EmbeddingCard.Root
        {...args}
        id="emb-2"
        title="고유사도 임베딩"
        description="검색 쿼리와 매우 높은 유사도를 보이는 임베딩입니다."
        dimensions={768}
        modelName="sentence-transformers"
        similarity={0.95}
      >
        <EmbeddingCard.Header>
          <EmbeddingCard.Title />
          <EmbeddingCard.Badge />
        </EmbeddingCard.Header>
        <EmbeddingCard.Content>
          <EmbeddingCard.Description />
          <EmbeddingCard.EmbeddingInfo />
        </EmbeddingCard.Content>
        <EmbeddingCard.Footer>
          <EmbeddingCard.ViewButton />
          <EmbeddingCard.DownloadButton />
        </EmbeddingCard.Footer>
      </EmbeddingCard.Root>
    </div>
  ),
};

export const WithDetailedMetadata: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <EmbeddingCard.Root
        {...args}
        id="emb-3"
        title="상세 메타데이터 임베딩"
        description="다양한 메타데이터 정보가 포함된 임베딩 카드입니다."
        dimensions={2048}
        modelName="GPT-4 Embedding"
        similarity={0.78}
      >
        <EmbeddingCard.Header>
          <EmbeddingCard.Title />
          <EmbeddingCard.Badge />
        </EmbeddingCard.Header>
        <EmbeddingCard.Content>
          <EmbeddingCard.Description />
          <EmbeddingCard.Metadata>
            <EmbeddingCard.MetadataItem label="생성일" value="2024-01-20" />
            <EmbeddingCard.MetadataItem
              label="소스"
              value="api/documentation.pdf"
            />
            <EmbeddingCard.MetadataItem label="크기" value="1.2MB" />
            <EmbeddingCard.MetadataItem label="언어" value="Korean" />
          </EmbeddingCard.Metadata>
          <EmbeddingCard.EmbeddingInfo />
        </EmbeddingCard.Content>
        <EmbeddingCard.Footer>
          <div className="flex gap-1">
            <EmbeddingCard.ViewButton />
            <EmbeddingCard.EditButton />
            <EmbeddingCard.DownloadButton />
          </div>
          <EmbeddingCard.DeleteButton />
        </EmbeddingCard.Footer>
      </EmbeddingCard.Root>
    </div>
  ),
};

export const LowSimilarity: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <EmbeddingCard.Root
        {...args}
        id="emb-4"
        title="저유사도 임베딩"
        description="검색 쿼리와 낮은 유사도를 보이는 임베딩으로, 참고용으로만 사용 권장됩니다."
        dimensions={512}
        modelName="BERT-base"
        similarity={0.23}
      >
        <EmbeddingCard.Header>
          <EmbeddingCard.Title />
          <EmbeddingCard.Badge />
        </EmbeddingCard.Header>
        <EmbeddingCard.Content>
          <EmbeddingCard.Description />
          <EmbeddingCard.Metadata>
            <EmbeddingCard.MetadataItem label="생성일" value="2024-01-10" />
            <EmbeddingCard.MetadataItem
              label="소스"
              value="legacy/old-docs.txt"
            />
          </EmbeddingCard.Metadata>
          <EmbeddingCard.EmbeddingInfo />
        </EmbeddingCard.Content>
        <EmbeddingCard.Footer>
          <EmbeddingCard.ViewButton />
          <EmbeddingCard.DeleteButton />
        </EmbeddingCard.Footer>
      </EmbeddingCard.Root>
    </div>
  ),
};

export const MinimalActions: Story = {
  render: (args) => (
    <div className="w-full max-w-md">
      <EmbeddingCard.Root
        {...args}
        id="emb-5"
        title="간단한 임베딩"
        description="최소한의 액션만 제공하는 임베딩 카드입니다."
        dimensions={384}
        modelName="MiniLM"
      >
        <EmbeddingCard.Header>
          <EmbeddingCard.Title />
          <EmbeddingCard.Badge />
        </EmbeddingCard.Header>
        <EmbeddingCard.Content>
          <EmbeddingCard.Description />
          <EmbeddingCard.EmbeddingInfo />
        </EmbeddingCard.Content>
        <EmbeddingCard.Footer>
          <EmbeddingCard.ViewButton />
        </EmbeddingCard.Footer>
      </EmbeddingCard.Root>
    </div>
  ),
};
