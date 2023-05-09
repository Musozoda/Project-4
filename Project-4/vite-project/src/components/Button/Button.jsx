import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function Outlined(props) {
  return (
    <Stack spacing={2} direction="row">
      <Button variant={props.variant} color="inherit">{props.text}</Button>
    </Stack>
  );
}