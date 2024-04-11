import { Box } from '@mui/material';
import { ReactElement } from 'react';
import { useAuth } from '@modules/auth/hooks';
import { AuthIncompleteRegistrationFormValues, AuthRegistrationValue } from '@modules/auth/types';
import { AuthRegistrationForm } from '@modules/auth/components';

export const AuthRegistrationPage = (): ReactElement => {
  const auth = useAuth();

  const handleSubmit = (data: AuthRegistrationValue) => {
    void auth.registration(data);
  };

  const handleChange = (value: AuthIncompleteRegistrationFormValues) => {
    auth.saveForm(value);
  };

  return (
    <Box className="w-full px-[100px] mx-auto sm:mx-0 flex flex-col justify-center">
      {/* <Box className="w-12 flex justify-center">
      </Box> */}

      <Box className="mt-8 text-4xl text-center font-bold tracking-tight leading-tight pb-5">
        Rejestracja
      </Box>
      <Box className="border-b-[1px]"/>

      <AuthRegistrationForm
        status={auth.status}
        incompleteForm={auth.form}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};
