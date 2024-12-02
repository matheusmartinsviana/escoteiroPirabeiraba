import { Outlet } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import CookieConsent from "../components/General/CookieConsent";
import BackToTopButton from "../components/layout/BackToTopButton";

export default function Body() {
  return (
    <>
      <Header />
      <Outlet />
      <CookieConsent />
      <Footer />
      <BackToTopButton />
    </>
  );
}
