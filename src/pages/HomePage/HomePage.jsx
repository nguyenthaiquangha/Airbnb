import React, { Fragment, Suspense } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { format } from "date-fns";
import vi from "date-fns/locale/vi";

function HomePage() {
  const locationUse = useLocation();
  const searchParams = new URLSearchParams(locationUse.search);
  const location = searchParams.get("location");
  const startDateISO = searchParams.get("startDate");
  const endDateISO = searchParams.get("endDate");
  const numberOfGuests = searchParams.get("numberOfGuests");
  const startDate = format(new Date(startDateISO), "dd MMMM", { locale: vi });
  const endDate = format(new Date(endDateISO), "dd MMMM", { locale: vi });
  return (
    <Fragment>
      <Header
        placeholder={`${location ? `${location} | ` : ""}${
          startDate && endDate && numberOfGuests
            ? `${startDate} - ${endDate} | ${numberOfGuests} khách`
            : "Nhập tỉnh thành"
        }`}
      />

      <div>
        <Suspense fallback={<>Loading...</>}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </Fragment>
  );
}

export default HomePage;
