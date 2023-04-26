import { ComponentMeta, ComponentStory } from "@storybook/react";
import SignUp from "./SignUp";
import { mockSignUpProps } from "./SignUp.mocks";

const SignUpStory: ComponentMeta<typeof SignUp> = {
  title: "auth/SignUp",
  component: SignUp,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default SignUpStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignUp> = (args) => <SignUp {...args} />;

export const Base: ComponentStory<typeof SignUp> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockSignUpProps.base,
};
