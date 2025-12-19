import type { StaticImageData } from "next/image";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import keyword1 from "@/public/keyword1.jpg";
import sort1 from "@/public/sort1.jpg";
import HillClimb_01 from "@/public/HillClimb_01.png";
import ZooDrop_01 from "@/public/ZooDrop/Thumbnail.png"

import Barrel_Thumbnail from "@/public/BarrelRace/Thumbnail.png";
import DS4PEP_Thumbnail from "@/public/DS4PEP/DS4PEP_Thumbnail.png";
import ARFruit_Thumbnail from "@/public/ARFruitScanner/Thumbnail.jpg";
import Solar_Thumbnail from "@/public/SolarSystemExplorer/Thumbnail.jpg";

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

export type GameData = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
  playUrl: string;
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
    title: "Game Developer",
    location: "XRC Studios Pvt Ltd",
    description:
      "Contributed to an Unreal Engine 5.6 VR training simulation for HIV prevention on Meta Quest and PC, implementing Convai-powered NPC conversations with facial expressions and animations. Developed a Unity WebGL quiz app featuring AI-generated questions, real-time scoring, and a responsive UI.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug 2025 - Nov 2025",
  },
  {
    title: "Game Developer Intern",
    location: "XRC Studios Pvt Ltd",
    description:
      "Developed multiple Unity gameplay prototypes, including a 2D car physics game, a redesigned Suika-style puzzle game, and a real-time multiplayer obstacle racer using Photon PUN. Focused on gameplay programming, physics, networking, and rapid prototyping.",
    icon: React.createElement(CgWorkAlt),

    date: "Feb 2025 - July 2025",
  },
  {
    title: "B.Sc Game Design and Development",
    location: "Asian Academy of Film and Television",
    description: "",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
] as const;

export const projectsData: ProjectData[] = [
  {
    title: "HIV Prevention Training Simulation",
    description:
      "HIV Prevention Training Simulation is a Meta Quest and desktop app that trains doctors in HIV prevention. Built with Unreal Engine 5.6, it uses the Convai SDK for real-time NPC conversations, including responsive facial expressions and movement based on the NPC's dialogue.",
    tags: ["Unreal Engine", "Convai", "Meta Quest"],
    imageUrl: DS4PEP_Thumbnail,
    media: [
      {type: "image", src: "/DS4PEP/DS4PEP_Thumbnail.png"},
      {type: "image", src: "/DS4PEP/01.png"},
      {type: "image", src: "/DS4PEP/02.png"}
    ]
  },
  {
    title: "AR Fruit Scanner",
    description:
      "This MERN chat app employs socket.io and RESTful APIs for seamless real-time communication and data exchange, ensuring reliability.",
    tags: ["React", "JavaScript", "Node.js", "MongoDB", "Websockets"],
    imageUrl: ARFruit_Thumbnail,
    media: [
      {type: "image", src: "/ARFruitScanner/01.jpg"},
      {type: "image", src: "/ARFruitScanner/02.jpg"},
      {type: "image", src: "/ARFruitScanner/03.jpg"},
    ]
  },
  {
    title: "Solar System Explorer",
    description:
      "This MERN password manager prioritizes security. It uses strong encryption, integrates the HaveIBeenPwned API for breach checks, and ensures your data's safety.",
    tags: ["React", "Node.js", "JavaScript", "MongoDB", "Redux", "API"],
    imageUrl: Solar_Thumbnail,
    media: [
      {type: "image", src: "/SolarSystemExplorer/01.png"},
      {type: "image", src: "/SolarSystemExplorer/02.png"},
    ]
  },
  {
    title: "Barrel Race",
    description:
      "Barrel Race is a multiplayer racing game designed for web platforms. It uses Photon PUN 2 as its networking solution and allows up to six players to join a room and race against one another in real time.",
    tags: ["Unity", "Photon Pun 2", "C#", "Webgl", "Multiplayer"],
    imageUrl: Barrel_Thumbnail,
    media: [
      {type: "image", src: "/BarrelRace/Thumbnail.png"},
      {type: "image", src: "/BarrelRace/01.png"},
      {type: "image", src: "/BarrelRace/02.png"},
    ]
  },
];

export const gamesData: GameData[] = [
  {
    title: "2D Car Physics Game",
    description:
      "Built a 2D side-scrolling car game in Unity with realistic suspension, torque control, and terrain physics.",
    tags: ["Unity", "C#", "2D", "Physics", "Vehicle Simulation"],
    imageUrl: HillClimb_01,
    playUrl: "https://abhi-dicaprio.itch.io/mountain-racing",
  },
  {
    title: "Zoo-Drop",
    description:
      "Zoo Drop is a cozy, addictive merge puzzle inspired by the viral Suika Game — but with animals! Drop adorable creatures into the enclosure, merge matching animals, and keep combining them until you create the mighty Blue Whale, the largest creature in the world!",
    tags: ["Unity", "C#", "2D", "Physics", "Puzzle"],
    imageUrl: ZooDrop_01,
    playUrl: "https://abhi-dicaprio.itch.io/zoo-drop",
  },
] as const;

export const skillsData = [
  "Unity Engine",
  "Unreal Engine",
  "C#",
  "Unreal Blueprints",
  "Roblox Studio",
  "Git",
  "Object Oriented Programming",
];
