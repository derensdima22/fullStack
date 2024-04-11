import { InfoProfileType } from '@modules/manager/types';
import { Box } from '@mui/material';
import { ReactElement, useMemo } from 'react';

export const Info = (props: InfoProfileType): ReactElement => {
  const { title, description } = props;

  const conversionDescription = useMemo(() => {
    return title === 'Password' ? '*******' : description;
  }, [description, title]);

  return (
    <Box className="flex py-2">
      <Box className="w-[150px] text-xl text-gray-700">{title}:</Box>
      <Box className="text-xl text-blue-900 font-medium">{conversionDescription}</Box>
    </Box>
  );
};
