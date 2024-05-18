import { Army } from "./Army";
import { Contacts } from "./Contacts";
import { Gallery } from "./Gallery";
import { Hero } from "./Hero";
import { Howto } from "./Howto";
import { Join } from "./Join";
import { Payments } from "./Payments";
import { Requirements } from "./Requirements";
import { Steps } from "./Steps";
import { Support } from "./Support";

const Main = () => {
  return (
    <main className="main">
      <Hero />
      <Payments />
      <Support />
      <Requirements />
      <Howto />
      <Army />
      <Steps />
      <Gallery />
      <Join />
      <Contacts />
    </main>
  );
};

export { Main };
