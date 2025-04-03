import AboutUs from "../../components/AboutUs/AboutUs";
import Contacts from "../../components/Contacts/Contacts";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";
import HeroSection from "../../components/HeroSection/HeroSection";
import Services from "../../components/Services/Services";

export default function Home() {
    return (
      <>
      <HeroSection/>
      <Services/>
      <Gallery/>
      <AboutUs/>
      <Contacts/>
      <Footer/>
      </>
    );
}