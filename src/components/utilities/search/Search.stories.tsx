import { ComponentMeta, ComponentStory } from "@storybook/react";
import Search from "./Search";
import { mockSearchProps } from "./Search.mocks";

const SearchStory: ComponentMeta<typeof Search> = {
  title: "templates/Search",
  component: Search,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default SearchStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Search> = (args) => <Search {...args} />;

export const Base: ComponentStory<typeof Search> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockSearchProps.base,
};
