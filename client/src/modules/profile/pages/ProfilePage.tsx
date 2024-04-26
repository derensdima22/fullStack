import { Profile } from '@core/components';
import { ModalFormProfileValues } from '@core/types';
import { useAuth } from '@modules/auth/hooks';
import { Box } from '@mui/material';
import { ReactElement, useState } from 'react';

export const ProfilePage = (): ReactElement => {
  const { user, edit, load, status } = useAuth();
  const [isLoadState, setIsLoadState] = useState<boolean>(false);

  const handleChangeUser = (props: ModalFormProfileValues) => {
    edit(props)
      .then(() => load(props.id))
      .then(() => setIsLoadState(true));
  };

  return (
    <Box>
      <Profile
        user={user}
        onClick={handleChangeUser}
        isLoadState={isLoadState}
        status={status}
      />
    </Box>
  );
};
