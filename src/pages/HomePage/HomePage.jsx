import React, { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function HomePage() {
    return (
        <Fragment>
            <Header />
            <div>
                <Suspense fallback={<>Loading...</>}>
                    <Outlet />
                </Suspense>
            </div>
            <Footer />
        </Fragment>
    );

}

export default HomePage