import type { StaticImageData } from "next/image";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import chat1 from "@/public/chat1.jpg";
import faceapp from "@/public/faceapp.jpg";
import keyword1 from "@/public/keyword1.jpg";
import network1 from "@/public/network1.jpg";
import password1 from "@/public/password1.jpg";
import sort1 from "@/public/sort1.jpg";
import HillClimb_01 from "@/public/HillClimb_01.png"

export type ProjectMedia = {
  type: "image" | "video";
  src: string;
};

export type ProjectData = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  media?: ProjectMedia[];
};

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Games",
    hash: "#games",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Full-Stack Developer",
    location: "XRC Studios Pvt Ltd",
    description:
      "Developed responsive React.js UI, improved load times by 30%, and integrated 3D experiences for metaqube.ai using Babylon.js. I optimized MongoDB APIs, boosting CRUD efficiency by 40%, and deployed on Firebase and Google Cloud. I also created AI NPCs and built a quizzing game with Unity and React.",
    icon: React.createElement(CgWorkAlt),
    date: "Feb 2023 - Present",
  },
  {
    title: "Full Stack Developer Intern",
    location: "Danalitic India Pvt. Ltd.",
    description:
      "Developed the Control and Command Center application with Node.js, Express.js, and MongoDB, creating an authentication middleware for security, RESTful APIs for adding/viewing IP cameras, and improved location tracking through geocoding.",
    icon: React.createElement(LuGraduationCap),

    date: "June 2022 - Aug 2022",
  },
  {
    title: "B.Tech CSE",
    location: "The Northcap University",
    description: "",
    icon: React.createElement(FaReact),
    date: "2019 - 2023",
  },
] as const;

export const projectsData: ProjectData[] = [
  {
    title: "AI Face App",
    description:
      "AI Face Insight is a React app using Azure Face API to analyze human faces, detecting attributes like head position, accessories, and glasses, with Firebase accessibility for ease of use.",
    tags: ["React.js", "JavaScript", "Azure AI", "Firebase"],
    imageUrl: faceapp,
    media: [
      {type: "video", src: "/media/Video_01.mp4"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
    ]
  },
  {
    title: "MERN Chat Application",
    description:
      "This MERN chat app employs socket.io and RESTful APIs for seamless real-time communication and data exchange, ensuring reliability.",
    tags: ["React", "JavaScript", "Node.js", "MongoDB", "Websockets"],
    imageUrl: chat1,
    media: [
      {type: "video", src: "/media/Video_01.mp4"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
    ]
  },
  {
    title: "Password Manager",
    description:
      "This MERN password manager prioritizes security. It uses strong encryption, integrates the HaveIBeenPwned API for breach checks, and ensures your data's safety.",
    tags: ["React", "Node.js", "JavaScript", "MongoDB", "Redux", "API"],
    imageUrl: password1,
    media: [
      {type: "video", src: "/media/Video_01.mp4"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
    ]
  },
  {
    title: "Keyword Extractor",
    description:
      "Keyword Extractor is a user-friendly React app that simplifies keyword extraction from text using the OpenAI API. Perfect for content optimization, research, and analysis",
    tags: ["React", "Node.js", "JavaScript", "Firebase", "Open AI"],
    imageUrl: keyword1,
    media: [
      {type: "video", src: "/media/Video_01.mp4"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
    ]
  },
  {
    title: "Selection Sort Simulator",
    description:
      "Experience a step-by-step selection sort simulation in HTML, CSS, and JS. Adjust speed, pause, and reset for optimal visual learning of sorting algorithms.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: sort1,
    media: [
      {type: "video", src: "/media/Video_01.mp4"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
      {type: "image", src: "/media/SS_01.png"},
    ]
  },
] as const;

export const gamesData = [
  {
    title: "2D Car Physics Game",
    description:
      "Built a 2D side-scrolling car game in Unity with realistic suspension, torque control, and terrain physics.",
    tags: ["Unity", "C#", "2D", "Physics", "Vehicle Simulation"],
    imageUrl: HillClimb_01,
    playUrl: "https://abhi-dicaprio.itch.io/tic-tac-toe",
  },
  {
    title: "2D Car Physics Game",
    description:
      "Built a 2D side-scrolling car game in Unity with realistic suspension, torque control, and terrain physics.",
    tags: ["Unity", "C#", "2D", "Physics", "Vehicle Simulation"],
    imageUrl: HillClimb_01,
    playUrl: "https://abhi-dicaprio.itch.io/tic-tac-toe",
  },
  {
    title: "2D Car Physics Game",
    description:
      "Built a 2D side-scrolling car game in Unity with realistic suspension, torque control, and terrain physics.",
    tags: ["Unity", "C#", "2D", "Physics", "Vehicle Simulation"],
    imageUrl: HillClimb_01,
    playUrl: "https://abhi-dicaprio.itch.io/tic-tac-toe",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Firebase",
  "AWS",
  "MongoDB",
  "Redux",
  "C++",
  "Express",
] as const;
