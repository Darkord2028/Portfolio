"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./project";
import ProjectMediaGallery from "./project-media-gallery";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.2);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
      <div className="mt-4 mx-auto flex max-w-[50rem] flex-col gap-8">
        {projectsData.map((project, index) => (
          <div key={index} className="w-full space-y-3">
            <Project {...project} />
            <ProjectMediaGallery media={project.media} />
          </div>
        ))}
      </div>

    </section>
  );
}
