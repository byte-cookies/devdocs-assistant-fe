import type { Meta } from "@storybook/react";
import ChatUserOutput from "./ChatUserOutput";

const meta: Meta<typeof ChatUserOutput> = {
  title: "Components/Organisms/Chat/ChatUserOutput",
  component: ChatUserOutput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "ChatUserOutput displays user messages with avatar, content, and timestamp in a fixed layout.",
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="w-[20rem] min-h-[6rem]">
        <Story />
      </div>
    ),
  ],
  tags: ["autodocs"],
  argTypes: {
    content: {
      control: "text",
      description: "Test content for the ChatUserOutput component.",
      defaultValue: "Hello, this is a test message!",
    },
  },
};

export default meta;

export const Default = {};
