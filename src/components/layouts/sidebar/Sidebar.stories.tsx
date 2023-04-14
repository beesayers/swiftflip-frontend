import { ComponentMeta, ComponentStory } from "@storybook/react";
import Sidebar from "./Sidebar";
import { mockSidebarProps } from "./Sidebar.mocks";

const SidebarStory: ComponentMeta<typeof Sidebar> = {
  title: "templates/Sidebar",
  component: Sidebar,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default SidebarStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Base: ComponentStory<typeof Sidebar> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockSidebarProps.base,
};
