// Dropdown.stories.ts|tsx

// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from "./Dropdown";

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
  args: {},
};
