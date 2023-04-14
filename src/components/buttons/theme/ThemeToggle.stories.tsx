import { ComponentMeta, ComponentStory } from "@storybook/react";
import ThemeToggle from "./ThemeToggle";
import { mockThemeToggleProps } from "./ThemeToggle.mocks";

const ThemeToggleStory: ComponentMeta<typeof ThemeToggle> = {
  title: "templates/ThemeToggle",
  component: ThemeToggle,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default ThemeToggleStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ThemeToggle> = (args) => <ThemeToggle {...args} />;

export const Base: ComponentStory<typeof ThemeToggle> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockThemeToggleProps.base,
};
