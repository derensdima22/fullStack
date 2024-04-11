import LinearProgress from '@mui/material/LinearProgress/LinearProgress';
import { PropsWithChildren, ReactElement, Suspense } from 'react';

export const SuspenseWrapper = ({ children: LazyComponent }: PropsWithChildren): ReactElement => {
  return (
    <Suspense fallback={<LinearProgress className="fixed top-0 z-max right-0 left-0 w-full"/>}>
      {LazyComponent}
    </Suspense>
  );
};
