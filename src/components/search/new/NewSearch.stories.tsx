import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewSearch from "./NewSearch";
import { mockNewSearchProps } from "./NewSearch.mocks";

const NewSearchStory: ComponentMeta<typeof NewSearch> = {
  title: "search/NewSearch",
  component: NewSearch,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: [],
};

export default NewSearchStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof NewSearch> = (args) => <NewSearch {...args} />;

export const Base: ComponentStory<typeof NewSearch> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockNewSearchProps.base,
};
