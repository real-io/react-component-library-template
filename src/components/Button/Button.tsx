import React from "react";
import styles from "./Button.module.scss";
import { Button } from "@radix-ui/themes";

interface IButtonProps {
  text: string;
  variant: "classic" | "solid" | "soft" | "surface" | "outline" | "ghost";
}

const ButtonWrapper = (props: IButtonProps) => {
  return (
    <>
      <Button variant={props.variant} className={styles.button}>{props.text}</Button>
    </>
  );
};

export default ButtonWrapper;
