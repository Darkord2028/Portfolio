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
          with over 1 year of hands-on experience in building 2D, 3D, AR/VR games and applications. I specialize in{" "}
          <span className="font-medium">Unity Engine</span> and{" "}
          <span className="font-medium">Unreal Engine</span>, to development for Windows, Mobile, Web as well as Meta Quest.
        </p>
      </div>
      <div className="mb-3">
        <p>
          During my time at XR Central, I worked as both a Game Developer Intern and Game Developer Trainee, where I contributed to diverse and challenging projects. My experience includes developing a 2D side-scrolling car game with realistic suspension, torque control, and terrain physics, redesigning classic games with innovative mechanics, and building real-time multiplayer racing games using Photon PUN. I have also worked on advanced XR projects, including a HIV Prevention Training Simulation for Meta Quest and desktop platforms built in Unreal Engine 5.6, integrating the Convai SDK for real-time NPC conversations with dynamic facial expressions and movement.
        </p>
      </div>
      <div className="mb-3">
        <p>
          In addition to game development, I have experience in full stack development and have built web-based applications using Unity WebGL, featuring AI-generated content, real-time scoring systems, and responsive user interfaces optimized for browser performance. This allows me to effectively bridge interactive gameplay with web technologies.
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
