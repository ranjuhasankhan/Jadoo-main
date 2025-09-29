import React from "react";
import Banner from "../components/Banner";
import ServiceSection from "../components/ServiceSection";
import Map from "../components/Map";
import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";
import DestinationSection from "../components/sections/DestinationSection";
import NextTripSection from "../components/sections/NextTripSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import BrandSection from "../components/sections/BrandSection";
import SubscribeSection from "../components/sections/SubscribeSection";
import { useAuth } from "../hooks/useAuth";


const Home = () => {

    const {currentUser} = useAuth();
    console.log(currentUser);
  return (
    <>
      <Banner />
      <ServiceSection />
      <DestinationSection />
      <NextTripSection />
      <TestimonialsSection />
      <BrandSection />
      <SubscribeSection />
      {/* <MediaPlayButton /> */}
      {/* <ReactPlayer src='https://youtu.be/sYga7EYOQ0Q?si=YGXoUA_D3rMXuPu9' /> */}
    </>
  );
};

export default Home;
