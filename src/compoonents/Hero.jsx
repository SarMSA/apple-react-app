import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../utils/index";

const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(
    window.innerWidth < 670 ? smallHeroVideo : heroVideo
  );

  const handleVideoSrcSet = () => {
    if (window.innerWidth < 670) {
      setVideoSrc(smallHeroVideo);
    } else {
      setVideoSrc(heroVideo);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleVideoSrcSet);
    return () => {
      window.removeEventListener("resize", handleVideoSrcSet);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", { opacity: 1, delay: 2 });
    gsap.to("#cta", { opacity: 1, y: -50, delay: 2 });
  });
  return (
    <section className="w-full nav-height bg-black relative ">
      <div className="h-5/6 w-full flex-center flex-col ">
        <p id="hero" className="hero-title">
          iPhone 15 pro
        </p>
        <div className="md:w-10/12 w-9/12">
          <video autoPlay playsInline={true} muted key={videoSrc}>
            <source src={videoSrc} type="video/mp4"></source>
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center translate-y-20 opacity-0"
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p>From $199/month or $999</p>
      </div>
    </section>
  );
};

export default Hero;
