import { links } from "./data";

export type SectionName = (typeof links)[number]["name"];
import { StaticImageData } from "next/image";

export type BaseProject = {
  title: string;
  description: string;
  tags: readonly string[];
  imageUrl: StaticImageData;
};
