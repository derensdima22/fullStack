import classNames from 'classnames';
import { Box, Container } from '@mui/material';
import { ReactElement, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '@modules/auth/hooks';

const AuthModule = (): ReactElement => {
  const auth = useAuth();
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const tokenSession = sessionStorage.getItem('token');

  useEffect(() => {
    if (token) {
      navigate('/manager', { replace: true });

      return;
    }
  }, [token, navigate]);

  return (
    <Box className="h-full overflow-auto flex bg-white">
    <Container
      maxWidth={false}
      className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 p-0"
    >
      {!auth.checked && (
        <>
          <Box
            className="flex justify-center w-full sm:w-1/2 h-full px-4 sm:px-12 md:px-16 md:py-0"
          >
            <Outlet/>
          </Box>

          <Box
            className={classNames(
              'w-full sm:w-1/2 relative hidden md:flex flex-auto',
              'h-full overflow-hidden'
            )}
          >
            <Box className="h-full w-[50px]"/>
            <Box className={classNames(
              'flex items-center justify-center w-full rounded-bl-lg2xl',
              'bg-gradient-to-t from-[#024AB5] from-10% via-[#316EC9] via-50% to-[#70A9FF] to-90%',
            )}>
              <Box className="text-7xl font-bold leading-none text-gray-100 z-10 relative">
                <img src="/authLogo.png"/>
                <Box className="text-center p-2">Analytix</Box>
              </Box>
            </Box>
          </Box>
        </>
      )}
    </Container>
  </Box>
  );
};

export default AuthModule;
