import React from 'react';
import MaterialUIPickers from './MaterialUIPickers'

export default {
  component: MaterialUIPickers,
  title: 'Component/MaterialUIPickers',
};

const Template = (args) => <MaterialUIPickers {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  task: {
    id: '1',
    title: 'Primary',
    state: 'MaterialUIPickers_BASIC',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};


// add Stories