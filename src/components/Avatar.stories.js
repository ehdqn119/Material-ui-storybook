import React from 'react';
import Avatar from './Avatar'

export default {
  component: Avatar,
  title: 'Component/Avatar',
};

const Template = (args) => <Avatar {...args} />;

export const Medium = Template.bind({});
Medium.args = {
  task: {
    id: '1',
    title: 'Primary',
    state: 'AVATAR_MEDIUM',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
  sx : {
    width : 28,
    height : 28
  }
};

export const Large = Template.bind({});
Large.args = {
  task: {
    ...Medium.args.task,
    state: 'AVATAR_LARGE',
  },
  sx : {
    ...Medium.args.sx,
    width : 50,
    height : 50
  }
};

export const Small = Template.bind({});
Small.args = {
    task: {
        ...Large.args.task,
        state: 'AVATAR_SMALL',
      },
      sx : {
        ...Large.args.sx,
        width : 20,
        height : 20
      }
};
export const Tiny = Template.bind({});
Tiny.args = {
    task: {
        ...Small.args.task,
        state: 'AVATAR_TINY',
      },
      sx : {
        ...Small.args.sx,
        width : 16,
        height : 16
      }
};

export const Square = Template.bind({});
Square.args = {
    task: {
        ...Small.args.task,
        state: 'AVATAR_TINY',
      },
      sx : {
        ...Small.args.sx,
      },
      style : {
        variant : "rounded"
      }
};

// add Stories