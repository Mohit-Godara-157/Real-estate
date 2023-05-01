import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Identify from "./components/Identify";
import OurPlatform from "./components/OurPlatform";
import OurApproach from "./components/OurApproach";
import CloseMore from "./components/CloseMore";
import HowToGet from "./components/HowToGet";
import SeeWhatOur from "./components/SeeWhatOur";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import YourTarget from "./components/YourTarget";
import Footer from "./components/Footer";
import PreLoader from "./components/PreLoader";

function App() {
  return (
    <>
      <PreLoader />
      <div className="d-flex  flex-column vh_xl_100 position-relative z_2">
        <NavBar />
        <HeroSection />
      </div>
      <Identify />
      <OurPlatform />
      <OurApproach />
      <CloseMore />
      <HowToGet />
      <SeeWhatOur />
      <YourTarget />
      <Footer />
    </>
  );
}

export default App;
