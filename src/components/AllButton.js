import React from 'react';
import Button from '@mui/material/Button';

export default function AllButton({ task: { id, title, state }, size, color ,onArchiveTask, onPinTask }) {
    return (
      <div className="list-item">
        <Button size={size} color={color} variant="text">Text</Button>
        <Button size={size} color={color} variant="contained">Contained</Button>
        <Button size={size} color={color} variant="outlined">Outlined</Button>
      </div>
    );
}
  