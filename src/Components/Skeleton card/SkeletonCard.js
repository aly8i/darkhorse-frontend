import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function SkeletonCard() {
  const darkMode = localStorage.getItem('dark');
  return (
    <div className="d-flex w-100">
      <Stack spacing={1} className="skeleton-card card-container card">
        <Skeleton variant="rectangular" width="100%" height={237.5} sx={{ bgcolor: darkMode === 'true' ? 'grey.900' : '' }} />
        <Skeleton variant="text" width="100%" sx={{ fontSize: '1rem', bgcolor: darkMode === 'true' ? 'grey.900' : '' }} />
        <Skeleton variant="text" width="60%" sx={{ bgcolor: darkMode === 'true' ? 'grey.900' : '' }} />
        <Skeleton variant="text" width="100%" sx={{ fontSize: '6rem', bgcolor: darkMode === 'true' ? 'grey.900' : '' }} />
        <Skeleton variant="text" width="100%" sx={{ bgcolor: darkMode === 'true' ? 'grey.900' : '' }} />
      </Stack>
    </div>
  );
}
