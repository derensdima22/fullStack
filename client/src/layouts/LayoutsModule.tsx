import { Header, Navbar } from '@layouts/components';
import { Box } from '@mui/material';
import classNames from 'classnames';
import { ReactElement } from 'react';
import { Outlet } from 'react-router-dom';

const LayoutsModule = (): ReactElement => {
  return (
    <Box className="flex w-full">
      <Navbar/>

      <Box
        className={classNames(
          'flex flex-col w-full h-screen transition-all bg-gray-300',
          'px-8 pt-5 pb-2'
        )}
      >
      <Header/>
        <Box id="app-layout-box" className="w-full h-full overflow-auto relative flex flex-col">
          <Box className="flex-auto">
            <Outlet/>
          </Box>

          {/*<Box className="flex-auto"/>*/}
        </Box>
      </Box>
    </Box>
  );
};

export default LayoutsModule;
