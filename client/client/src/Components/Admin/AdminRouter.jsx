import React, { useContext, useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";
import AdminHome from "./AdminHome";
import EventsHome from "./Events/EventsHome";
import CertificateHome from "./Certificate/CertificateHome";

import { AdminContext } from "../../App";

export default function AdminRouter() {
  const { isAdminLoggedIn } = useContext(AdminContext);
  useEffect(() => {
    document.title = "Admin Console | TnPCell SGGS";
  }, []);

  return isAdminLoggedIn ? (
    <>
      <AdminNavbar />
      <Routes>
        <Route path="/" element={<AdminHome />} />
        <Route path="/events" element={<EventsHome />} />
        <Route path="/cert" element={<CertificateHome />} />
      </Routes>
      <div className="copyright">
        copyright @2021 SGGSIE&T. All Rights Reserved.
      </div>
    </>
  ) : (
    <>
      <p>Access Denied</p>
      <Link to="/">Go back home.</Link>
    </>
  );
}
