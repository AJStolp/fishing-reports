import React from "react";
import HeroData from "../../component-data/hero-data";
// import Image from "next/image";

interface Heroprops {
  title?: HeroData;
  copy?: HeroData;
  sectionClass?: HeroData;
  headerClass?: HeroData;
  children?: React.ReactNode;
  imageSource?: HeroData;
}

function Hero({ title, copy, sectionClass, children, headerClass }: Heroprops) {
  return (
    <section className={sectionClass}>
      <h1 className={headerClass}>{title}</h1>
      <p>{copy}</p>
      {children}
    </section>
  );
}

export default Hero;
