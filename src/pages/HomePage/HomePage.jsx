import React, { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';

function HomePage() {
  return (
      <Fragment>
          <Header />
          <div>
              <Suspense fallback={<>Loading...</>}>
                  <Outlet />
              </Suspense>
          </div>
          <footer>
              Footer
          </footer>
      </Fragment>
  );
  
}

export default HomePage