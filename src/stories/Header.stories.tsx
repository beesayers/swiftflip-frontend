import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Header } from "./Header";

const HeaderStory: ComponentMeta<typeof Header> = {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default HeaderStory;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const LoggedIn: ComponentStory<typeof Header> = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

export const LoggedOut: ComponentStory<typeof Header> = Template.bind({});
LoggedOut.args = {};
