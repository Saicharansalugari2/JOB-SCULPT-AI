"use client";

import React, { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        videoElement.classList.add("scrolled");
      } else {
        videoElement.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="w-full pt-12 md:pt-16 pb-10 bg-gray-100 text-black"> {/* Reduced top padding */}
      <div className="space-y-14 text-center">
        <div className="space-y-12 mx-auto">
          <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl xl:text-8xl text-black drop-shadow-lg">
            Your AI Career Coach for
            <br />
            Professional Success
          </h1>
          <p className="mx-auto max-w-[600px] text-gray-700 md:text-xl mt-14 text-black font-semibold shadow-lg animate-pulse">
            Advance your Career with Optimized Resume, Interview Preparation, Weekly Industry Insights, and AI-powered tools.
          </p>
        </div>
        <div className="flex justify-center space-x-4 mt-8"> {/* Added mt-8 for spacing between buttons */}
          <Link href="/dashboard">
            <Button
              size="lg"
              className="px-8 py-4 text-lg bg-black text-white font-sans relative overflow-hidden"
            >
              <span className="shine-text">Get Started for Free</span> <span className="ml-2">→</span>
            </Button>
          </Link>
        </div>
        <div className="hero-video-wrapper mt-10 md:mt-16"> {/* Increased mt-5 to mt-10 */}
          <div ref={videoRef} className="hero-video">
          <video
  ref={videoRef}
  className="rounded-lg shadow-2xl border mx-auto"
  width="1280"
  height="720"
  autoPlay
  loop
  muted
  playsInline
  style={{ minHeight: "400px" }}
>
  <source src="jobsculpt.mp4" type="video/mp4" />
  {/* Ensure the video file is in the 'public' directory */}
  Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
