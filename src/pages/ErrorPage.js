import { Fragment } from 'react';
import { useRouteError } from 'react-router-dom';

import Header from 'components/header/Header';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <Fragment>
      <Header />
      <main className='maincontainer'>
        <div className='mainchild'>
          <h1>An error occured!</h1>
          <p>{error.message}</p>
        </div>
      </main>
    </Fragment>
  );
};

export default ErrorPage;
