import React from "react";

interface IButtonProps {
  text: string;
}

const Button = (props: IButtonProps) => {
  return <button>{props.text}</button>;
};

export default Button;
