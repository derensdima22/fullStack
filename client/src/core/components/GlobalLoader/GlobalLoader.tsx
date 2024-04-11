import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React, { ReactElement, useEffect, useState } from 'react';
import { Transition, TransitionStatus } from 'react-transition-group';

const duration = 600;
const defaultStyle = {
  transition: `opacity ${duration}ms`,
  opacity: 0,
};

const transitionStyles: Record<TransitionStatus, Record<string | symbol, number | string>> = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
  unmounted: { opacity: 0 },
};

export const GlobalLoader = (): ReactElement | null => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Transition in={show} timeout={duration} mountOnEnter unmountOnExit>
        {(transitionStatus) => (
          <Box
            style={{
              zIndex: 9999,
              ...defaultStyle,
              ...transitionStyles[transitionStatus],
            }}
            className="fixed flex items-center justify-center inset-0 bg-white"
          >
            <Box className="relative flex items-center gap-2">
              <Typography
                variant="h6"
                className="tracking-wider flex gap-2 items-center animate-pulse text-dark-500 uppercase relative z-10 font-black"
              >
                <span className="">loading</span>
              </Typography>
            </Box>
          </Box>
        )}
      </Transition>
    </>
  );
};
