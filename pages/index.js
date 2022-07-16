import React from "react";
import Footer from "../components/Footer";
import IntroSection from "../components/IntroSection";
import JoinOurCommunity from "../components/JoinOurCommunity";
import NavBar from "../components/NavBar";
import WhySection from "../components/WhySection";

const HomePage = () => {
  return (
    <div className="font-satoshi ">
      <main className="px-2 sm:px-5 md:px-10 lg:px-20   ">
        <NavBar />
        <IntroSection />
        <WhySection />
        <JoinOurCommunity />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
