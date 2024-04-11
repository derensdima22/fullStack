import { Box } from '@mui/material';
import classNames from 'classnames';
import { ReactElement } from 'react';

export const ProfileHeader = (): ReactElement => {
  return (
    <Box className={classNames(
      'text-white text-xl h-[120px] rounded-xl p-8 flex items-center justify-start',
      'bg-gradient-to-l from-[#024AB5] from-10% via-[#316EC9] via-50% to-[#70A9FF] to-90%',
    )}>
      Your Profile
    </Box>
  );
};
