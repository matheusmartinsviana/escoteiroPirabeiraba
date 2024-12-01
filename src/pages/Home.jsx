import BannerSlider from "../components/Sections/BannerSlider";
import Branches from "../components/Sections/Branches";
import OurHistory from "../components/Sections/OurHistory";
import OurMisson from "../components/Sections/ourMission";
import Projects from "../components/Sections/Projects";
import Volunteer from "../components/Sections/Volunteer";

export default function Home() {
  return (
    <>
      <BannerSlider />
      <OurHistory />
      <OurMisson />
      <Branches />
      <Projects />
      <Volunteer />
    </>
  );
}
