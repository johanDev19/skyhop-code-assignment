import React from "react";

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
        {underline && <div className="w-full bg-black h-[1px] mt-4"></div>}
      </h1>
    </>
  );
}

Title.defaultProps = {
  underline: true,
};

export default Title;
