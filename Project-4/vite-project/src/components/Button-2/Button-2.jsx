import * as React from 'react';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';
import Stack from '@mui/material/Stack';

export default function Text() {
  return (
    <Stack direction="row" spacing={2}>
      <Button className='flex items-center' variant="text" color="inherit" endIcon={<EastIcon />}>
      Learn more
      </Button>

    </Stack>
  );
}