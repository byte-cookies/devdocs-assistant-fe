import type { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  title: "Components/Atoms/Spinner",
  component: Spinner,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "Spinner는 로딩 상태를 나타내는 회전하는 인디케이터입니다. 다양한 크기와 색상을 지원합니다.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    spinnerSizing: {
      control: { type: "select" },
      options: ["sm", "md", "lg"],
      description: "Spinner 크기",
    },
    spinnerVisual: {
      control: { type: "select" },
      options: ["primary", "secondary"],
      description: "Spinner 시각적 스타일",
    },
    label: {
      control: "text",
      description: "접근성을 위한 라벨",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    spinnerSizing: "md",
    spinnerVisual: "primary",
    label: "Loading...",
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <div className="text-center">
        <Spinner spinnerSizing="sm" spinnerVisual="primary" />
        <p className="text-xs mt-2">Small</p>
      </div>
      <div className="text-center">
        <Spinner spinnerSizing="md" spinnerVisual="primary" />
        <p className="text-xs mt-2">Medium</p>
      </div>
      <div className="text-center">
        <Spinner spinnerSizing="lg" spinnerVisual="primary" />
        <p className="text-xs mt-2">Large</p>
      </div>
    </div>
  ),
};

export const AllVisuals: Story = {
  render: () => (
    <div className="flex items-center gap-8">
      <div className="text-center">
        <Spinner spinnerSizing="md" spinnerVisual="primary" />
        <p className="text-xs mt-2">Primary</p>
      </div>
      <div className="text-center">
        <Spinner spinnerSizing="md" spinnerVisual="secondary" />
        <p className="text-xs mt-2">Secondary</p>
      </div>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <Spinner spinnerSizing="sm" spinnerVisual="primary" />
        <span className="text-sm">로딩 중...</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner spinnerSizing="md" spinnerVisual="primary" />
        <span className="text-base">데이터를 불러오는 중...</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner spinnerSizing="lg" spinnerVisual="secondary" />
        <span className="text-lg">처리 중입니다...</span>
      </div>
    </div>
  ),
};

export const WithCustomLabel: Story = {
  args: {
    spinnerSizing: "lg",
    spinnerVisual: "primary",
    label: "파일을 업로드하는 중입니다...",
  },
};

export const InButton: Story = {
  render: () => (
    <div className="space-y-4">
      <button
        className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md disabled:opacity-50"
        disabled
      >
        <Spinner
          spinnerSizing="sm"
          spinnerVisual="primary"
          className="text-white"
        />
        로딩 중...
      </button>
      <button
        className="flex items-center gap-2 px-6 py-3 bg-gray-600 text-white rounded-md disabled:opacity-50"
        disabled
      >
        <Spinner
          spinnerSizing="md"
          spinnerVisual="secondary"
          className="text-white"
        />
        처리하는 중...
      </button>
    </div>
  ),
};
