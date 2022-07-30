import React from 'react';

import AllButton from './AllButton'

export default {
  component: AllButton,
  title: 'AllButton',
  argTypes: {
    color: {
      options: ['primary', 'secondary','error'],
      control: { type: 'radio' },
    },
  },
};

const Template = (args) => <AllButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  task: {
    id: '1',
    title: 'Primary',
    state: 'TASK_INBOX',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  task: {
    ...Primary.args.task,
    state: 'TASK_DISABLED',
  },
  size : 'large',
};

export const Click = Template.bind({});
Click.args = {
  task: {
    ...Primary.args.task,
    state: 'TASK_Click',
  },
};