import "mapbox-gl/dist/mapbox-gl.css";
import Head from "next/head";
import Hero from "src/components/hero/hero";
import heroData from "src/component-data/hero-data";
import Maps from "src/components/map/maps";
import "mapbox-gl/dist/mapbox-gl.css";

const Home = () => {
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
        <Hero sectionClass={heroData.sectionClass}>
          <Maps />
        </Hero>
      </main>
    </div>
  );
};
export default Home;
