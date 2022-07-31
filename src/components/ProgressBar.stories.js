import React from 'react';
import MuiPagination from './MuiPagination'

export default {
  component: MuiPagination,
  title: 'Component/MuiPagination',
};

const Template = (args) => <MuiPagination {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  task: {
    id: '1',
    title: 'Primary',
    state: 'MuiPagination',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};


// add Stories