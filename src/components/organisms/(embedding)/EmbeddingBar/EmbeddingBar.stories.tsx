import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { EmbeddingBar } from "./EmbeddingBar";

const meta: Meta<typeof EmbeddingBar.Root> = {
  title: "Organisms/Embedding/EmbeddingBar",
  component: EmbeddingBar.Root,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        component:
          "EmbeddingBar is a compound component for managing embedding collections with statistics, search, filtering, and bulk actions.",
      },
    },
  },
  argTypes: {
    totalEmbeddings: {
      control: { type: "number" },
      description: "Total number of embeddings",
    },
    processedEmbeddings: {
      control: { type: "number" },
      description: "Number of processed embeddings",
    },
    averageSimilarity: {
      control: { type: "number", min: 0, max: 1, step: 0.01 },
      description: "Average similarity score (0-1)",
    },
    searchQuery: {
      control: { type: "text" },
      description: "Current search query",
    },
    isProcessing: {
      control: { type: "boolean" },
      description: "Whether processing is in progress",
    },
  },
  args: {
    onSearch: fn(),
    onFilter: fn(),
    onRefresh: fn(),
    onExport: fn(),
    onImport: fn(),
    onClear: fn(),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-full">
      <EmbeddingBar.Root
        {...args}
        totalEmbeddings={150}
        processedEmbeddings={120}
        averageSimilarity={0.78}
      >
        <EmbeddingBar.LeftSection>
          <EmbeddingBar.Stats>
            <EmbeddingBar.TotalEmbeddings />
            <EmbeddingBar.ProcessedEmbeddings />
            <EmbeddingBar.AverageSimilarity />
          </EmbeddingBar.Stats>
          <EmbeddingBar.ProgressContainer />
        </EmbeddingBar.LeftSection>
        <EmbeddingBar.RightSection>
          <EmbeddingBar.SearchContainer>
            <EmbeddingBar.SearchInput />
          </EmbeddingBar.SearchContainer>
          <EmbeddingBar.ActionSection>
            <EmbeddingBar.RefreshButton />
            <EmbeddingBar.ExportButton />
            <EmbeddingBar.ImportButton />
            <EmbeddingBar.ClearButton />
          </EmbeddingBar.ActionSection>
        </EmbeddingBar.RightSection>
      </EmbeddingBar.Root>
    </div>
  ),
};

export const Processing: Story = {
  render: (args) => (
    <div className="w-full">
      <EmbeddingBar.Root
        {...args}
        totalEmbeddings={200}
        processedEmbeddings={75}
        averageSimilarity={0.65}
        isProcessing={true}
      >
        <EmbeddingBar.LeftSection>
          <EmbeddingBar.Stats>
            <EmbeddingBar.TotalEmbeddings />
            <EmbeddingBar.ProcessedEmbeddings />
            <EmbeddingBar.AverageSimilarity />
          </EmbeddingBar.Stats>
          <EmbeddingBar.ProgressContainer label="임베딩 처리 중..." />
        </EmbeddingBar.LeftSection>
        <EmbeddingBar.RightSection>
          <EmbeddingBar.SearchContainer>
            <EmbeddingBar.SearchInput disabled />
          </EmbeddingBar.SearchContainer>
          <EmbeddingBar.ActionSection>
            <EmbeddingBar.RefreshButton />
            <EmbeddingBar.ExportButton disabled />
            <EmbeddingBar.ImportButton disabled />
          </EmbeddingBar.ActionSection>
        </EmbeddingBar.RightSection>
      </EmbeddingBar.Root>
    </div>
  ),
};

export const EmptyState: Story = {
  render: (args) => (
    <div className="w-full">
      <EmbeddingBar.Root
        {...args}
        totalEmbeddings={0}
        processedEmbeddings={0}
        averageSimilarity={0}
      >
        <EmbeddingBar.LeftSection>
          <EmbeddingBar.Stats>
            <EmbeddingBar.TotalEmbeddings />
            <EmbeddingBar.ProcessedEmbeddings />
            <EmbeddingBar.AverageSimilarity />
          </EmbeddingBar.Stats>
        </EmbeddingBar.LeftSection>
        <EmbeddingBar.RightSection>
          <EmbeddingBar.SearchContainer>
            <EmbeddingBar.SearchInput
              placeholder="임베딩이 없습니다..."
              disabled
            />
          </EmbeddingBar.SearchContainer>
          <EmbeddingBar.ActionSection>
            <EmbeddingBar.ImportButton />
          </EmbeddingBar.ActionSection>
        </EmbeddingBar.RightSection>
      </EmbeddingBar.Root>
    </div>
  ),
};

export const HighVolume: Story = {
  render: (args) => (
    <div className="w-full">
      <EmbeddingBar.Root
        {...args}
        totalEmbeddings={10500}
        processedEmbeddings={10500}
        averageSimilarity={0.89}
        searchQuery="React"
      >
        <EmbeddingBar.LeftSection>
          <EmbeddingBar.Stats>
            <EmbeddingBar.TotalEmbeddings />
            <EmbeddingBar.ProcessedEmbeddings />
            <EmbeddingBar.AverageSimilarity />
          </EmbeddingBar.Stats>
        </EmbeddingBar.LeftSection>
        <EmbeddingBar.RightSection>
          <EmbeddingBar.SearchContainer>
            <EmbeddingBar.SearchInput />
          </EmbeddingBar.SearchContainer>
          <EmbeddingBar.ActionSection>
            <EmbeddingBar.RefreshButton />
            <EmbeddingBar.ExportButton />
            <EmbeddingBar.ClearButton />
          </EmbeddingBar.ActionSection>
        </EmbeddingBar.RightSection>
      </EmbeddingBar.Root>
    </div>
  ),
};

export const MinimalActions: Story = {
  render: (args) => (
    <div className="w-full">
      <EmbeddingBar.Root
        {...args}
        totalEmbeddings={25}
        processedEmbeddings={25}
        averageSimilarity={0.72}
      >
        <EmbeddingBar.LeftSection>
          <EmbeddingBar.Stats>
            <EmbeddingBar.TotalEmbeddings />
            <EmbeddingBar.ProcessedEmbeddings />
          </EmbeddingBar.Stats>
        </EmbeddingBar.LeftSection>
        <EmbeddingBar.RightSection>
          <EmbeddingBar.SearchContainer>
            <EmbeddingBar.SearchInput />
          </EmbeddingBar.SearchContainer>
          <EmbeddingBar.ActionSection>
            <EmbeddingBar.RefreshButton />
          </EmbeddingBar.ActionSection>
        </EmbeddingBar.RightSection>
      </EmbeddingBar.Root>
    </div>
  ),
};

export const WithCustomProgress: Story = {
  render: (args) => (
    <div className="w-full">
      <EmbeddingBar.Root
        {...args}
        totalEmbeddings={500}
        processedEmbeddings={350}
        averageSimilarity={0.83}
      >
        <EmbeddingBar.LeftSection>
          <EmbeddingBar.Stats>
            <EmbeddingBar.TotalEmbeddings />
            <EmbeddingBar.ProcessedEmbeddings />
            <EmbeddingBar.AverageSimilarity />
          </EmbeddingBar.Stats>
          <EmbeddingBar.ProgressContainer label="벡터화 진행률" />
        </EmbeddingBar.LeftSection>
        <EmbeddingBar.RightSection>
          <EmbeddingBar.SearchContainer>
            <EmbeddingBar.SearchInput placeholder="키워드로 검색..." />
          </EmbeddingBar.SearchContainer>
          <EmbeddingBar.ActionSection>
            <EmbeddingBar.ExportButton />
            <EmbeddingBar.ImportButton />
          </EmbeddingBar.ActionSection>
        </EmbeddingBar.RightSection>
      </EmbeddingBar.Root>
    </div>
  ),
};
