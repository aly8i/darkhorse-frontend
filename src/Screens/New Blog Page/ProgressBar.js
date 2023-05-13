import { LinearProgress } from '@mui/material';
import React from 'react';

function ProgressBar(props) {
  return <LinearProgress variant="determinate" sx={{ position: 'fixed', top: '0px', left: '0px', width: '100%', zIndex: '1000' }} value={props.value} className="progress-bar" />;
}

export default ProgressBar;
