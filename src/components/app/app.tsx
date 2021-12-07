import React, { FC } from "react";
import { Route, Routes } from "react-router-dom";
import PageHome from "../../pages/page-main/page-home";
import PageInfoFlight from "../../pages/page-info-flignt/page-info-flignt";
import PageProfile from "../../pages/page-profile/page-profile";
import Page404 from "../../pages/page-404/page-404";
import styles from "./app.module.css";

const App: FC = () => {
  return (
    <div className={styles.wrapper}>
      <Routes>
        <Route path="/" element={<PageHome />} />
        <Route path="/flight-information" element={<PageInfoFlight />} />
        <Route path="/profile" element={<PageProfile />} />
        <Route element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
