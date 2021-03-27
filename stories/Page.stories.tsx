import { Story, Meta } from '@storybook/react/types-6-0';

import { Page } from '@geist-ui/react';

import { App, AppProps } from '../pages/index';

export default {
  title: 'Pages/Index',
  component: App,
  argTypes: {

  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<AppProps> = (args) => (
  <Page size="large">
    <Page.Content>
      <App {...args} />
    </Page.Content>
  </Page>
);

export const Default = Template.bind({});
Default.args = {};
