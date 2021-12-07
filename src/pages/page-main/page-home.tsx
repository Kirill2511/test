import React from "react";
import MenuItem from "./menu-item/menu-item";
import dataMenu from "../../utils/data/data-menu";
import styles from "./page-home.module.css";

const PageHome = () => {
  return (
    <main className={styles.main}>
      <nav>
        <ul className={styles.menu}>
          {dataMenu.map((item) => (
            <MenuItem item={item} key={item.id} />
          ))}
        </ul>
      </nav>
    </main>
  );
};

export default PageHome;
