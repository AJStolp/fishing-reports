import React from "react";

interface Heroprops {
  copy?: string;
  className?: string;
  children?: React.ReactNode;
}

function Hero({ copy, className, children }: Heroprops) {
  return (
    <>
      <button className={className}>
        {copy}
        {children}
      </button>
    </>
  );
}

export default Hero;
