import { Story, Meta } from '@storybook/react/types-6-0';

import Text, { TextProps } from '../src/components/Text';
import AppStage from '../src/utils/AppStage';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    setStage: { action: 'set stage' },
  },
  parameters: {
    layout: 'fullscreen',
  },
} as Meta;

const Template: Story<TextProps> = (args) => <div style={{ flex: 1, display: 'flex', height: '100vh' }}><Text {...args} /></div>;

export const Default = Template.bind({});
Default.args = {
  stage: AppStage.MAIN,
  donation: {
    id: 0,
    amount: 22,
    client: 'client-2',
    donor: 'Hans Wurst',
    msg: 'Party hard!',
  },
};
