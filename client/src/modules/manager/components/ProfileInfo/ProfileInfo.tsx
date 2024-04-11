import { useAuth } from '@modules/auth/hooks';
import { Box } from '@mui/material';
import { ReactElement } from 'react';
import { Info } from '@modules/manager/components';

export const ProfileInfo = (): ReactElement => {
  const { user } = useAuth();

  return (
    <Box className="py-[80px]">
      <Info title="Admin id" description={user.id.slice(0, 4)}/>
      <Info title="Name" description="Adela Parkson"/>
      <Info title="Address" description="Khumaltar, Lalitpur"/>
      <Info title="Contact No." description="9841236978"/>
      <Info title="Email" description={user.email}/>
      <Info title="Password"/>
    </Box>
  );
};
