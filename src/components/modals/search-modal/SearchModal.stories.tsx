import { ComponentMeta, ComponentStory } from "@storybook/react";
import SearchModal from "./SearchModal";
import { mockSearchModalProps } from "./SearchModal.mocks";

const SearchModalStory: ComponentMeta<typeof SearchModal> = {
  title: "Modal/SearchModal",
  component: SearchModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default SearchModalStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SearchModal> = (args) => <SearchModal {...args} />;

export const Base: ComponentStory<typeof SearchModal> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockSearchModalProps.base,
};
