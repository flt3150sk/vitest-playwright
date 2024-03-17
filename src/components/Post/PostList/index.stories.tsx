import { PostList } from ".";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: PostList,
} satisfies Meta<typeof PostList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
