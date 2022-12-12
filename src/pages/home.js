import "../styles/scss/index.scss";

import Hero from "../components/hero/hero";
import Gallery from "../components/gallery/gallery";
import Banner from "../components/banners/banner";
import Graphic from "../components/graphic/graphic";
import Location from "../components/location/location";
import Description from "../components/table/description";
import Table from "../components/table/table";
import Picture from "../components/banners/picture";
import Contact from "../components/contact/contact";

function Home() {
  return (
    <>
      <Hero />
      <Gallery />
      <Banner />
      <Graphic />
      <Location />
      <Description />
      <Table />
      <Picture />
      <Contact />
    </>
  );
}

export default Home;
