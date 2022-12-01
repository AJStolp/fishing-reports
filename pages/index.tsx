import Head from "next/head";
import Hero from "src/components/hero/hero";
import heroData from "src/component-data/hero-data";
import Button from "src/components/button/button";
import ButtonData from "src/component-data/hero-button-data";
// import useFetchMapData from "src/hooks/api/mapBoxApi/api";
import Map from "src/components/map/map";

const Home = () => {
  // const { getMap, mapContainer, lat, lng, zoom } = useFetchMapData();

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
          <Map />
        </Hero>
      </main>
    </div>
  );
};
export default Home;
