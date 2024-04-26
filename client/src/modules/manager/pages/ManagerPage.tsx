import React, { ReactElement } from 'react';
import { Profile } from '@core/components';
import { useAuth } from '@modules/auth/hooks';
import { ModalFormProfileValues } from '@core/types';

export const ManagerPage = (): ReactElement => {
  const { user } = useAuth();

  return (
    <div>
      {/* <Profile user={user} onClick={handleChangeUser}/> */}
    </div>
  );
};
