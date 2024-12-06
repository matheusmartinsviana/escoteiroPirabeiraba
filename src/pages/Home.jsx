import LocationSection from "../components/Sections/LocationSection";
import BannerSlider from "../components/Sections/BannerSlider";
import OurHistory from "../components/Sections/OurHistory";
import OurMisson from "../components/Sections/ourMission";
import Volunteer from "../components/Sections/Volunteer";
import Projects from "../components/Sections/Projects";
import Branches from "../components/Sections/Branches";
import Contact from "../components/Sections/Contact";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <OurHistory />
      <OurMisson />
      <Branches />
      <Projects />
      <Volunteer />
      <Contact />
      <LocationSection />
    </>
  );
}
