import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Header from 'components/header/Header';

const AppMap = () => {
  return (
    <Fragment>
      <Header />
      <main className='maincontainer'>
        <div className='mainchild'>
          <Outlet />
        </div>
      </main>
    </Fragment>
  );
};

export default AppMap;
