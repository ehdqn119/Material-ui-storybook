import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';


export default function MuiAvatar({ task: { id, title, state }, sx ,onArchiveTask, onPinTask }) {
        return (
          <Stack direction='row' spacing={2}>
      
            <Avatar
              alt='Remy Sharp'
              src='https://images.pexels.com/photos/9548074/pexels-photo-9548074.jpeg?cs=srgb&dl=pexels-dominika-roseclay-9548074.jpg&fm=jpg'
              sx={sx}
              variant="square"
            />
      
            <Avatar
              alt='Remy Sharp'
              sx={sx}
              src='https://images.pexels.com/photos/12836129/pexels-photo-12836129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              variant="rounded"
            />
      
            <Avatar
              size=''
              alt='Remy Sharp'
              src='https://images.pexels.com/photos/8290775/pexels-photo-8290775.jpeg?cs=srgb&dl=pexels-dominika-roseclay-8290775.jpg&fm=jpg'
              sx={sx}
              variant="circular"
            />
          </Stack>
        );
}
  