import React from "react";
import Divider from "./Divider";

interface Props {
  children: React.ReactNode;
  as: "div" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "label";
  underline?: boolean;
  className?: string;
}

function Text({ children, underline, className, as }: Props) {
  const Element = as;

  return (
    <>
      <Element
        className={`text-3xl text-skyhopBlueDark font-bold w-fit ${className}`}
      >
        {children}
        {underline && <Divider />}
      </Element>
    </>
  );
}

Text.defaultProps = {
  underline: false,
  as: "p",
};

export default Text;
