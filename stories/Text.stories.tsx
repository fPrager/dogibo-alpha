import { Story, Meta } from '@storybook/react/types-6-0';

import { Text, TextProps } from '../components/Text';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {

  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<TextProps> = (args) => <div style={{ flex: 1, display: 'flex', height: '100vh' }}><Text {...args} /></div>;

export const Default = Template.bind({});
Default.args = {};
