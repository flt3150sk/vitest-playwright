import { CommentList } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    postId: 1,
  },
};
