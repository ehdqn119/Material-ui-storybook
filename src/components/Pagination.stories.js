import React from 'react';
import Pagination from './Pagination'

export default {
  component: Pagination,
  title: 'Component/Pagination',
};

const Template = (args) => <Pagination {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  task: {
    id: '1',
    title: 'Primary',
    state: 'Pagination',
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};


// add Stories