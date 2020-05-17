import * as React from "react";
import "./Button.scss";

type btnProps = {
  handler: () => void;
  children: string | object;
  customStyle?: object;
  type?: "submit" | "reset" | "button";
  disabled?: boolean;
};

const Button = ({
  handler,
  children,
  customStyle = {},
  type,
  disabled,
}: btnProps) => {
  return (
    <button
      disabled={disabled}
      type={type}
      className="btnContainer"
      onClick={handler}
      style={customStyle}
    >
      {children}
    </button>
  );
};

export default Button;
