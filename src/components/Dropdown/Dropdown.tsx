import React from "react";
import { Menu } from "@headlessui/react";
import styles from "./Dropdown.module.scss";

interface IDropdown {}

const Dropdown = () => {
  return (
    <Menu as="div" className={styles.dropdown}>
      <Menu.Button as="button">More</Menu.Button>
      <Menu.Items as="ul" className={styles.dropdown_list}>
        {Array.from({ length: 10 }, Boolean).map((e, i) => (
          <Menu.Item key={i} as="li">
            {() => (
              <span>
                <span>{i}.</span>
                <a href="/">Option</a>
              </span>
            )}
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
};

export default Dropdown;
