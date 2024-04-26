import { ArrowBack, Home } from '@mui/icons-material';
import { Box, Button, Container, Typography } from '@mui/material';
import React, { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';

export const Error404Page = (): ReactElement => {
  const navigate = useNavigate();

  const goBackHandler = (): void => {
    if (window.history.length <= 2) {
      navigate('/');
    } else {
      navigate(-1);
    }
  };

  const goHomeHandler = () => {
    navigate('/');
  };

  return (
    <Box className="flex w-full h-full">
      <Container className="m-auto text-center max-w-2xl space-y-5">
        <Typography variant="h2" className="font-bold">
          Error Not Found
        </Typography>
        <Typography variant="h4" className="">
          Page Not Found :(
        </Typography>
        {document.referrer && (
          <Button className="mt-5 px-5 py-2" startIcon={<ArrowBack/>} onClick={goBackHandler}>
             Go Back
          </Button>
        )}
        <Button className="mt-5 px-5 py-2" startIcon={<Home/>} onClick={goHomeHandler}>
          Go Home
        </Button>
      </Container>
    </Box>
  );
};

