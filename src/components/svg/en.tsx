import React from 'react';
import Box from '@mui/material/Box';

type IconProps = {
  fill?: string;
};

export default function App(props: IconProps) {
  const { fill = '#B4B4B4' } = props;
  return (
    <Box>
      <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M1.4 6.88V10.944H6.84V12H0.28V0.799999H6.76V1.856H1.4V5.824H6.36V6.88H1.4ZM15.9644 9.92V0.799999H17.0844V12H16.1244L9.88438 2.88V12H8.76438V0.799999H9.72438L15.9644 9.92Z"
          fill={fill}
        />
      </svg>
    </Box>
  );
}
