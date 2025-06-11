import type { Meta } from "@storybook/react";
import ChatInput from "./ChatInput";

const meta: Meta<typeof ChatInput> = {
  title: "Components/Organisms/Chat/ChatInput",
  component: ChatInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ChatInput is a simple chat input component with field, attach button, and send button in a fixed layout.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[58rem] h-[9rem]">
        <Story />
      </div>
    ),
  ],
};

export default meta;

export const Default = {};
