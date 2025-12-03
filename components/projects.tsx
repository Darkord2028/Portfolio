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

      {/* Full width + spacing */}
      <div className="mt-4 mx-auto w-full max-w-none flex flex-col gap-10 px-6">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="w-full space-y-4 min-h-[25rem] p-4"
          >
            <Project {...project} />
            <ProjectMediaGallery media={project.media} />
          </div>
        ))}
      </div>
    </section>
  );
}
