import { LampDemo } from "@/Components/ui/lamp";
import UrlInputCard from "@/Components/ui/UrlInputCard";
import AboutUs from "@/Components/ui/AboutUs";
export default function Home() {
  return (
    <main className="text-amber-50" >
      <br />
      <br />
      <br />
      <br />
      <LampDemo />
        
      <section id="urlinput">
      <UrlInputCard />
      </section>
      
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section id="about-us-section">
        <AboutUs />
      </section>
      
    </main>
  );
}
