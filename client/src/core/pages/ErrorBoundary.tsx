import HomeIcon from '@mui/icons-material/Home';
import { Box, Button, Container, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

export const ErrorBoundary = (): ReactElement => {
  const error = useRouteError() as Error;
  const navigate = useNavigate();

  return (
    <Box className="flex w-full h-full">
      <Container className="m-auto text-center max-w-2xl space-y-5">
        <Typography variant="h2" className="font-bold">
          Something went wrong...
        </Typography>
        <Typography variant="h5" className="">
          {/*{error.status}*/}
          Please either refresh the page oe return home to try again.
        </Typography>

        <Box className="bg-gray-200 rounded p-5 overflow-auto">
          {error.message.toString()}
        </Box>

        <Button
          className="mt-5 px-5 py-2"
          startIcon={<HomeIcon/>}
          onClick={() => navigate('/')}
        >
          Go Home
        </Button>
      </Container>
    </Box>
  );
};
