import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import App from '../App';

export default {
  title: 'Example/app',
  component: App,
} as Meta;

const Template: Story = () => <App/>;

export const AppPage = Template.bind({});
AppPage.args = {
};

// export const LoggedOut = Template.bind({});
// LoggedOut.args = {
//   ...HeaderStories.LoggedOut.args,
// };
