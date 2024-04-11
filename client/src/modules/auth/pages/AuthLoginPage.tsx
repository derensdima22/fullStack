import { Box, MenuItem, Select } from '@mui/material';
import { ReactElement } from 'react';
import { useAuth } from '@modules/auth/hooks';
import { AuthLoginForm } from '@modules/auth/components';
import { AuthLoginValue } from '@modules/auth/types';
import { useNavigate } from 'react-router-dom';

const navigateLink = [
  { value: '/auth/registration', label: 'Registration' },
  { value: '/auth', label: 'Login' },
];

export const AuthLoginPage = (): ReactElement => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (data: AuthLoginValue) => {
    void auth.login(data);
  };

  const linkNavigate = (value: string) => {
    navigate(value, { replace: true });
  };

  return (
    <Box className="w-full px-[100px] mx-auto sm:mx-0 flex flex-col justify-center">
      {/* <Box className="w-12 flex justify-center">
      </Box> */}

      <Box className="mt-8 text-4xl font-bold tracking-tight leading-tight">
        Logowanie do oddziału
      </Box>

      <Box className="flex items-baseline mt-0.5 text-gray-300 p-2">
        Wpisz swój adres e-mail i hasło, aby się zalogować!
      </Box>
      <Box className="border-b-[1px]"/>

      <Select className="my-7 mr-7" sx={{ borderRadius: '15px' }}>
        {navigateLink.map((link) =>
          <MenuItem
            key={link.value}
            value={link.value}
            onClick={() => linkNavigate(link.value)}
          >
            {link.label}
          </MenuItem>
        )}
      </Select>

      <AuthLoginForm
        status={auth.status}
        onSubmit={handleSubmit}
      />
    </Box>
  );
};
