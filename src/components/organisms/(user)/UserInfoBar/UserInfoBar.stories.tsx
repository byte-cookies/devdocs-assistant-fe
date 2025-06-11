import type { Meta, StoryObj } from "@storybook/react";
import UserInfoBar from "./UserInfoBar";

const meta: Meta<typeof UserInfoBar> = {
  title: "Components/Organisms/User/UserInfoBar",
  component: UserInfoBar,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: "20rem", height: "60rem" }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
