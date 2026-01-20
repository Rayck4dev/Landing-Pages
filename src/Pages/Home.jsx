import Hero from "../components/Hero";
import Highlights from "../components/Highlights";
import About from "../components/About";
import Promo from "../components/Promo";

export default function Home() {
  return (
    <main className="pt-10">
      <Hero />
      <Highlights />
      <About />
      <Promo />
    </main>
  );
}
