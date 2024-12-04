
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
const Clock: React.FC = () => {
  const [time, setTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }));
    }, 1000);

    return () => clearInterval(timer); 
  }, []);

  return (
    <Box
    >
      {time}
    </Box>
  );
};

export default Clock;


