import Navbar from "./scenes/Navbar.jsx";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import Projets from "./scenes/Projets";
import Contact from "./scenes/Contact";
import Footer from "./scenes/Footer";
import { useEffect, useState } from "react";
import LineGradient from "./components/LineGradient";
import useMediaQuery from "./hooks/useMediaQuery";

function App() {
  const [selectedPage, setSelectedPage] = useState("home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        selectedPage("home")
      }
      if (window.scrollY > 600) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-5/6 mx-auto">
      <Landing />
      </div>
      <div className="w-5/6 mx-auto">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setIsTopOfPage={setSelectedPage}
          />
        )}
        {/* <Landing setSelectedPage={setSelectedPage} /> */}
      </div>
      {/*<LineGradient />*/}
      <div className="w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      {/*<LineGradient /> */}
      <div className="w-5/6 mx-auto">
        <Projets />
      </div>
      {/*<LineGradient />*/}
      <div className="w-5/6 mx-auto">
        <Contact />
      </div>
      <Footer />

    </div>

  );
}

export default App; 
