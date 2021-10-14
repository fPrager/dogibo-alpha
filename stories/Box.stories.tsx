import { Story, Meta } from '@storybook/react/types-6-0';

import Box, { BoxProps } from '../src/components/Box';

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {

  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<BoxProps> = (args) => (
  <div style={{ flex: 1, display: 'flex', height: '100vh' }}>
    <Box {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {};
