import React, { Fragment, Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function HomePage() {
  return (
    <Fragment>
      <Header />
      <div style={{minHeight: "473px",marginTop: "8rem"}}>
        <Suspense fallback={<>Loading...</>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
