import React from "react";
import HeroData from "./hero-data";
import Image from "next/image";

interface Heroprops {
  title?: HeroData;
  copy?: HeroData;
  sectionClass?: HeroData;
  headerClass?: HeroData;
  children?: React.ReactNode;
  imageSource: HeroData;
}

function Hero({
  title,
  copy,
  sectionClass,
  children,
  headerClass,
  imageSource,
}: Heroprops) {
  return (
    <section className={sectionClass}>
      <Image
        src={imageSource}
        alt="Man and boy relaxing by the lake"
        width={250}
        height={250}
        objectFit="contain"
        //   layout="fill"
      />
      <h1 className={headerClass}>{title}</h1>
      <p>{copy}</p>
      {children}
    </section>
  );
}

export default Hero;
