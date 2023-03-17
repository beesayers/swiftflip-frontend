import { ComponentMeta, ComponentStory } from "@storybook/react";
import QueryTable from "./QueryTable";
import { mockQueryTableProps } from "./QueryTable.mocks";

const QueryTableStory: ComponentMeta<typeof QueryTable> = {
  title: "templates/QueryTable",
  component: QueryTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: [],
};

export default QueryTableStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof QueryTable> = (args) => <QueryTable {...args} />;

export const Base: ComponentStory<typeof QueryTable> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockQueryTableProps.base,
};
