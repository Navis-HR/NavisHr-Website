import React, { useState } from "react";
import TopBar from "../component/TopBar";
import NavBar from "../component/NavBar";
import SwiperSlide from "../component/SwiperSlide";
import SearchContainer from "../component/SearchContainer";
import ExploreMore from "../component/ExploreMore";
import ContactUs from "../component/ContactUs";
import Footer from "../component/Footer";

const Home: React.FC = () => {
  const [currentLanguage, setCurrentLanguage] = useState<"ENGLISH" | "JAPAN">(
    "ENGLISH"
  );

  const handleLanguageChange = (language: "ENGLISH" | "JAPAN") => {
    setCurrentLanguage(language);
  };

  return (
    <div className="md:relative ">
      <div className="md:absolute md:top-0 md:left-0 md:right-0 z-10">
        <div>
          <TopBar
            currentLanguage={currentLanguage}
            onLanguageChange={handleLanguageChange}
          />
        </div>
        <div className="md:mt-5">
          <NavBar />
        </div>
      </div>
      <SwiperSlide />
      <SearchContainer />
      <ExploreMore />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
