import { ComponentMeta, ComponentStory } from "@storybook/react";
import BaseTemplate from "./BaseTemplate";
import { mockBaseTemplateProps } from "./BaseTemplate.mocks";

const BaseTemplateStory: ComponentMeta<typeof BaseTemplate> = {
  title: "templates/BaseTemplate",
  component: BaseTemplate,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default BaseTemplateStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseTemplate> = (args) => (
  <BaseTemplate {...args} />
);

export const Base: ComponentStory<typeof BaseTemplate> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockBaseTemplateProps.base,
};
