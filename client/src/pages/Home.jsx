import React from "react";
import Header from "../Components/Header";
import Steps from "../Components/Steps";
import BgSlider from "../Components/BgSlider";
import Testimonial from "../Components/Testimonial";
import Upload from "../Components/Upload";

const Home = () => {
  return (
    <div>
      <Header />
      <Steps />
      <BgSlider />
      <Testimonial />
      <Upload />
    </div>
  );
};

export default Home;
