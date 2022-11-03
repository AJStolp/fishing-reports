import Head from "next/head";
import Hero from "components/hero/hero";
import heroData from "component-data/hero-data";
import Button from "components/button/button";
import ButtonData from "component-data/hero-button-data";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Fishing Reports</title>
        <meta
          name="Fishing Reports"
          content="Before you head out on your next fishing trip, read up on how anglers have done in the past."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-slate-800">
        <Hero
          // title={heroData.title}
          // copy={heroData.copy}
          sectionClass={heroData.sectionClass}
          // headerClass={heroData.headerClass}
          // imageSource={heroData.imageSource}
        >
          <h1>
            <span className="font-semibold text-5xl text-white">
              {heroData.title}
            </span>
          </h1>
          <p className="text-2xl py-5 max-w-2xl">{heroData.copy}</p>
          <Button copy={ButtonData.copy} className={ButtonData.className} />
        </Hero>
      </main>
    </div>
  );
}
