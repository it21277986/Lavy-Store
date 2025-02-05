import About from "@/components/About/About";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import ToggleButton from "@/components/Item/ToggleButton";

export default function Home() {
  return (
    <div>
      <Hero/>
      <ToggleButton/>
      <About/>
      <Footer/>
    </div>
  );
}
