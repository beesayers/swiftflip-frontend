import { ComponentMeta, ComponentStory } from "@storybook/react";
import ModalGraph from "./ModalGraph";
import { mockModalGraphProps } from "./ModalGraph.mocks";

const ModalGraphStory: ComponentMeta<typeof ModalGraph> = {
  title: "Modal/SearchModal/ModalGraph",
  component: ModalGraph,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default ModalGraphStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ModalGraph> = (args) => <ModalGraph {...args} />;

export const Base: ComponentStory<typeof ModalGraph> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockModalGraphProps.base,
};
