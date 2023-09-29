import React from "react";

interface IButtonProps {
  text: string;
}

const Button: React.FunctionComponent<IButtonProps> = ({ text }) => {
  return <button>{text}</button>;
};

export default Button;
