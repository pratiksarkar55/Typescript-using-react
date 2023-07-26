import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
interface ButtonPropsI {
  interfaceProps: string;
}
const Button: React.FC<ButtonProps & ButtonPropsI> = ({
  children,
  interfaceProps,
  style,
  title,
  ...rest
}) => {
  console.log("Button");
  return (
    <div>
      <button style={{ ...style, color: "orange" }} {...rest}>
        {title ?? children}
      </button>
    </div>
  );
};

export default Button;
