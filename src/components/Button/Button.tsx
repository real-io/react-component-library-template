import React from "react";
import styles from "./Button.module.scss";
import { Button } from "@radix-ui/themes";

interface IButtonProps {
  text: string;
}

const ButtonWrapper = (props: IButtonProps) => {
  return (
    <>
      <Button className={styles.button}>{props.text}</Button>
    </>
  );
};

export default ButtonWrapper;
