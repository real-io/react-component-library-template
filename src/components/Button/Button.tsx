import React from "react";
import styles from './Button.module.scss';

interface IButtonProps {
  text: string;
}

const Button = (props: IButtonProps) => {
  return <button className={styles.button}>{props.text}</button>;
};

export default Button;
