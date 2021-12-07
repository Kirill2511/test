import React, { FC } from "react";
import { Link } from "react-router-dom";
import { TItem } from "../../../utils/types/menu";
import styles from "./menu-item.module.css";

interface IPropsMenuItem {
  item: TItem;
}

const MenuItem: FC<IPropsMenuItem> = ({ item }) => (
  <li>
    <Link to={item.href} className={styles.menu_link}>
      <span>{item.name}</span>
    </Link>
  </li>
);

export default MenuItem;
