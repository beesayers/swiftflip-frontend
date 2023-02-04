import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchResult from "./SearchResult";
import { mockSearchResultProps } from "./SearchResult.mocks";

const SearchResultStory: ComponentMeta<typeof SearchResult> = {
  title: "utilities/SearchResult",
  component: SearchResult,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default SearchResultStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchResult> = (args) => (
  <SearchResult {...args} />
);

export const Base: ComponentStory<typeof SearchResult> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockSearchResultProps.base,
};
