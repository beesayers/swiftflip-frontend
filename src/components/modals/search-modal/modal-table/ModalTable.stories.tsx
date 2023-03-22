import { ComponentMeta, ComponentStory } from "@storybook/react";
import ModalTable from "./ModalTable";
import { mockModalTableProps } from "./ModalTable.mocks";

const ModalTableStory: ComponentMeta<typeof ModalTable> = {
  title: "Modal/SearchModal/ModalTable",
  component: ModalTable,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default ModalTableStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModalTable> = (args) => <ModalTable {...args} />;

export const Base: ComponentStory<typeof ModalTable> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockModalTableProps.base,
};
