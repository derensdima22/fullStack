import { ReactElement, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { createPortal } from 'react-dom';
import { GlobalLoader } from './core/components/GlobalLoader';
import { useAuth } from '@modules/auth/hooks';

const App = (): ReactElement => {
  const auth = useAuth();

  useEffect(() => {
    console.log('App-auth', auth.user);

    if (localStorage.getItem('token')) {
      auth.check();
    }
  }, []);

  return (
      <SnackbarProvider
        preventDuplicate
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        maxSnack={3}
      >
        <main className="App m-0 h-full bg-gray-100 overflow-hidden">
          <Outlet/>
          {createPortal(<GlobalLoader/>, document.body)}
        </main>
      </SnackbarProvider>
  );
};

export default App;
