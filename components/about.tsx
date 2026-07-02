"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      
      <div className="mb-3">
        <p className="font-medium">Hello, I'm a Game Developer!</p>
        <p>
          With over 1.5 years of hands-on experience building 2D, 3D, and XR (AR/VR) applications. I specialize in{" "}
          <span className="font-medium">Unity</span> and{" "}
          <span className="font-medium">Unreal Engine</span>, developing for Windows, Mobile, Web, and Meta Quest.
        </p>
      </div>
      
      <div className="mb-3">
        <p>
          At <span className="font-medium">HapzXR</span>, I engineered an immersive VR safety training simulation focused on "Working at Heights" site inspections, implementing interactive hazard detection and safety protocol tracking. Previously at <span className="font-medium">XR Central (XRC Studios)</span>, I developed diverse projects including an Unreal Engine 5.6 VR training simulation integrated with Convai AI NPCs, real-time multiplayer racers via Photon PUN, and physics-driven 2D gameplay.
        </p>
      </div>
      
      <div className="mb-3">
        <p>
          In addition to traditional game development, I am experienced in bridging interactive gameplay with web technologies. I have built performance-optimized <span className="font-medium">Unity WebGL</span> applications featuring AI-generated content and real-time scoring. I thrive on turning complex mechanics and cutting-edge tech into seamless, interactive user experiences.
        </p>
      </div>

      {/* <div className="mb-3">
        <p className="font-medium">Hello, I'm a Full Stack Developer!</p>
        <p>
          My expertise lies in crafting dynamic web applications, and I
          specialize in utilizing the power of modern web technologies to bring
          digital ideas to life.
        </p>
        <p>
          With a strong command of <span className="font-medium">React.js</span>
          , <span className="font-medium">Node.js</span>, and{" "}
          <span className="font-medium">Firebase</span>, I've had the privilege
          of working on diverse projects. These projects encompass everything
          from constructing <span className="font-medium">RESTful APIs</span> to
          implementing secure authentication middleware. I've also seamlessly
          integrated APIs for email, spreadsheets, and Firebase, demonstrating
          my adaptability in handling various functionalities.
        </p>
        <p>
          Additionally, I've tackled the challenge of developing intuitive admin
          portals, providing efficient tools for managing and editing data. My
          proficiency extends to a wide array of technical skills, including
          JavaScript, HTML, CSS, AWS, Git, and Linux. My passion for innovation
          drives me to continuously explore new technologies and seamlessly
          integrate them into my projects.
        </p>
      </div> */}

      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}