import { ComponentMeta, ComponentStory } from "@storybook/react";
import SignIn from "./SignIn";
import { mockSignInProps } from "./SignIn.mocks";

const SignInStory: ComponentMeta<typeof SignIn> = {
  title: "auth/SignIn",
  component: SignIn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
};

export default SignInStory;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SignIn> = (args) => <SignIn {...args} />;

export const Base: ComponentStory<typeof SignIn> = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Base.args = {
  ...mockSignInProps.base,
};
