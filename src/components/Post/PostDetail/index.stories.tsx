import { PostDetail } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: PostDetail,
} satisfies Meta<typeof PostDetail>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    id: 1,
  },
};
