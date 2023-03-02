import { ComponentMeta, ComponentStory } from "@storybook/react";
import QueryDetailModal from "./QueryDetailModal";
import { mockQueryDetailModalProps } from "./QueryDetailModal.mocks";

const QueryDetailModalStory: ComponentMeta<typeof QueryDetailModal> = {
  title: "templates/QueryDetailModal",
  component: QueryDetailModal,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default QueryDetailModalStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QueryDetailModal> = (args) => <QueryDetailModal {...args} />;

export const Base: ComponentStory<typeof QueryDetailModal> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockQueryDetailModalProps.base,
};
