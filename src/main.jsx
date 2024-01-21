import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./routes/Home";
import Bookings from "./routes/Bookings";
import UnderConstruction from "./routes/UnderConstruction";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />} />

          <Route path={"/bookings"} element={<Bookings />} />
          <Route path={"/about"} element={<UnderConstruction />} />
          <Route path={"/menu"} element={<UnderConstruction />} />
          {/* <Route path={"/confirmedBooking"} element={<ConfirmedBooking />} /> */}
          <Route path={"/order-online"} element={<UnderConstruction />} />
          <Route path={"/login"} element={<UnderConstruction />} />
          <Route
            path="*"
            element={
              <div className="h-screen flex justify-center items-center ">
                <span>Page Not found</span>
              </div>
            }
          />
        </Routes>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>
);
