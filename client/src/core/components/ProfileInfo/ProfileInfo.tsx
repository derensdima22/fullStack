import { Box } from '@mui/material';
import { ReactElement } from 'react';
import { isEmpty } from 'lodash';
import { Info } from '@core/components';
import { ProfileInfoType } from '@core/types';

export const ProfileInfo = ({ user }: ProfileInfoType): ReactElement => {
  return (
    <>
      {!isEmpty(user) && <Box className="py-[80px]">
        <Info title="Admin id" description={user && user.id.slice(0, 4)}/>
        <Info title="Name" description={user.name}/>
        <Info title="Address" description={user.address}/>
        <Info title="Contact No." description={user.contactNumber}/>
        <Info title="Email" description={user.email}/>
        <Info title="Password"/>
      </Box>}
    </>
  );
};
