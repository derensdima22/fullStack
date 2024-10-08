import { RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { appRoutes } from './routes';
import { store } from './store';

import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <RouterProvider router={appRoutes}/>
  </Provider>,
);
