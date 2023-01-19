import { ComponentMeta, ComponentStory } from "@storybook/react";
import Footer from "./Footer";

const FooterComponent: ComponentMeta<typeof Footer> = {
  title: "navigation/Footer",
  component: Footer,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
};

export default FooterComponent;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const Base: ComponentStory<typeof Footer> = Template.bind({});
Base.args = {};
