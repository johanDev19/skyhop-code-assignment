import React from "react";
import Divider from "./Divider";

interface Props {
  children: React.ReactNode;
  underline?: boolean;
  className?: string;
}

function Title({ children, underline, className }: Props) {
  return (
    <>
      <h1 className={`text-3xl font-bold w-fit ${className}`}>
        {children}
        {underline && <Divider />}
      </h1>
    </>
  );
}

Title.defaultProps = {
  underline: true,
};

export default Title;
