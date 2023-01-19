import { ComponentMeta, ComponentStory } from "@storybook/react";
import PrimaryLayout from "./PrimaryLayout";
import { mockPrimaryLayoutProps } from "./PrimaryLayout.mocks";

const LayoutPrimary: ComponentMeta<typeof PrimaryLayout> = {
  title: "layouts/PrimaryLayout",
  component: PrimaryLayout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default LayoutPrimary;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof PrimaryLayout> = (args) => (
  <PrimaryLayout {...args} />
);

export const Base: ComponentStory<typeof PrimaryLayout> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockPrimaryLayoutProps.base,
};
