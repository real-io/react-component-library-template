import React from "react";
import styles from "./Button.module.scss";
import { Button } from "@radix-ui/themes";

interface IButtonProps {
  addClassName?: string;
  text: string;
  variant: "classic" | "solid" | "soft" | "surface" | "outline" | "ghost";
  [x: string]: any;
}

const ButtonWrapper = ({ variant, addClassName, ...props }: IButtonProps) => {
  return (
    <>
      <Button
        variant={variant}
        className={[styles.button, addClassName].join(" ")}
        {...props}
      >
        {props.text}
      </Button>
    </>
  );
};

export default ButtonWrapper;
